import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import { gzipSync } from "node:zlib"

import * as React from "react"
import { renderToString } from "react-dom/server"
import ts from "typescript"
import { build } from "vite"

const root = new URL("../", import.meta.url)
const fromRoot = (path) => new URL(path, root)
const read = (path) => readFile(fromRoot(path), "utf8")

const packageJson = JSON.parse(await read("package.json"))
const sourceIndex = await read("src/index.ts")
const componentFiles = (await readdir(fromRoot("src/components/ui")))
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => file.replace(/\.tsx$/, ""))
  .sort()
const componentExports = [
  ...sourceIndex.matchAll(/components\/ui\/([a-z0-9-]+)\.js/g),
]
  .map((match) => match[1])
  .sort()

assert.deepEqual(componentExports, componentFiles, "public component inventory")

const declarationFiles = (await readdir(fromRoot("dist/components/ui")))
  .filter((file) => file.endsWith(".d.ts"))
  .map((file) => file.replace(/\.d\.ts$/, ""))
for (const declaration of declarationFiles) {
  assert(
    componentFiles.includes(declaration),
    `unexpected declaration: ${declaration}.d.ts`
  )
  await readFile(fromRoot(`dist/components/ui/${declaration}.js`))
}

const ui = await import(fromRoot("dist/index.js"))
for (const name of ["Accordion", "Button", "Command", "Progress"]) {
  assert.equal(typeof ui[name], "function", `${name} runtime export`)
}

const buttonHtml = renderToString(React.createElement(ui.Button, null, "OK"))
assert.match(buttonHtml, /<button/)
assert.match(buttonHtml, />OK<\/button>/)
const sidebarHtml = renderToString(
  React.createElement(
    ui.SidebarProvider,
    null,
    React.createElement(ui.SidebarMenuSkeleton, { showIcon: true })
  )
)
assert.match(sidebarHtml, /--skeleton-width:70%/)

const commandSource = await read("src/components/ui/command.tsx")
assert.match(commandSource, /<Command>\{children\}<\/Command>/)

const css = await readFile(fromRoot("dist/styles.css"))
assert.equal(css.includes("data:font"), false, "default CSS embeds no fonts")
assert.equal(css.includes("lg\\:grid-cols-4"), false, "demo classes excluded")
assert(gzipSync(css).length < 50_000, "default CSS stays below 50 kB gzip")

for (const dependency of [
  "@tailwindcss/vite",
  "shadcn",
  "tailwindcss",
  "tw-animate-css",
]) {
  assert.equal(packageJson.dependencies[dependency], undefined)
  assert(packageJson.devDependencies[dependency])
}
assert.equal(packageJson.dependencies["@fontsource-variable/inter"], undefined)

for (const specifier of [
  "@ravenopsnet/ui",
  "@ravenopsnet/ui/components/button",
  "@ravenopsnet/ui/styles.css",
]) {
  import.meta.resolve(specifier)
}

const virtualFile = new URL("consumer-test.tsx", root).pathname
const virtualSource = `
import { Button, type ButtonProps, type ChartConfig } from "@ravenopsnet/ui"
import { Input } from "@ravenopsnet/ui/components/input"
const config: ChartConfig = { revenue: { color: "red" } }
const props: ButtonProps = { size: "sm", children: "OK" }
export const view = <><Button {...props} /><Input /></>
void config
`

function typeDiagnostics(module, moduleResolution) {
  const options = {
    module,
    moduleResolution,
    target: ts.ScriptTarget.ES2022,
    jsx: ts.JsxEmit.ReactJSX,
    strict: true,
    noEmit: true,
    skipLibCheck: false,
  }
  const host = ts.createCompilerHost(options)
  const fileExists = host.fileExists.bind(host)
  const readFileFromHost = host.readFile.bind(host)
  host.fileExists = (file) => file === virtualFile || fileExists(file)
  host.readFile = (file) =>
    file === virtualFile ? virtualSource : readFileFromHost(file)

  return ts
    .getPreEmitDiagnostics(ts.createProgram([virtualFile], options, host))
    .map((diagnostic) => ({
      code: diagnostic.code,
      message: ts.flattenDiagnosticMessageText(diagnostic.messageText, " "),
    }))
}

for (const [name, module, resolution] of [
  ["bundler", ts.ModuleKind.ESNext, ts.ModuleResolutionKind.Bundler],
  ["node16", ts.ModuleKind.Node16, ts.ModuleResolutionKind.Node16],
  ["nodenext", ts.ModuleKind.NodeNext, ts.ModuleResolutionKind.NodeNext],
]) {
  assert.deepEqual(typeDiagnostics(module, resolution), [], `${name} types`)
}

const bundle = await build({
  configFile: false,
  logLevel: "silent",
  plugins: [
    {
      name: "virtual-consumer",
      resolveId(id) {
        return id === "virtual:consumer" ? id : null
      },
      load(id) {
        return id === "virtual:consumer"
          ? 'import { Button } from "@ravenopsnet/ui"; console.log(Button)'
          : null
      },
    },
  ],
  build: {
    write: false,
    minify: true,
    rollupOptions: {
      input: "virtual:consumer",
      external(id) {
        return (
          id !== "virtual:consumer" &&
          id !== "@ravenopsnet/ui" &&
          !id.startsWith(".") &&
          !id.startsWith("/")
        )
      },
    },
  },
})
const chunk = bundle.output.find((output) => output.type === "chunk")
const bundledModules = Object.keys(chunk.modules)
assert(bundledModules.some((module) => module.endsWith("/button.js")))
assert(bundledModules.some((module) => module.endsWith("/utils.js")))
assert.equal(
  bundledModules.some((module) =>
    /\/(chart|sidebar|command|drawer|sonner)\.js$/.test(module)
  ),
  false,
  "Button-only consumer excludes unrelated modules"
)

console.log("package verification passed")
