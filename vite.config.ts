import { extname, resolve } from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import pkg from "./package.json"

const buildOnlyDependencies = new Set([
  "@fontsource-variable/inter",
  "@tailwindcss/vite",
  "shadcn",
  "tailwindcss",
  "tw-animate-css",
])
const runtimeDependencies = Object.keys(pkg.dependencies || {}).filter(
  (dependency) => !buildOnlyDependencies.has(dependency)
)

function addJavaScriptExtensions(content: string) {
  return content.replace(
    /(from\s+["']|import\s*\(\s*["'])(\.{1,2}\/[^"']+)(["'])/g,
    (statement, prefix: string, specifier: string, suffix: string) =>
      extname(specifier) ? statement : `${prefix}${specifier}.js${suffix}`
  )
}

const prepareLibraryStyles = {
  name: "prepare-library-styles",
  enforce: "pre" as const,
  apply: "build" as const,
  transform(code: string, id: string) {
    if (!id.endsWith("/src/index.css")) return

    return code
      .replace(
        '@import "tailwindcss";',
        '@import "tailwindcss" source(none);\n@source "./shadcn";'
      )
      .replace('@import "@fontsource-variable/inter";', "")
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    prepareLibraryStyles,
    react(),
    tailwindcss(),
    // Automatically compiles your TypeScript declaration files (.d.ts)
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      include: ["src"],
      exclude: ["src/main.tsx", "src/App.tsx"],
      entryRoot: resolve(__dirname, "src"),
      compilerOptions: {
        rootDir: resolve(__dirname, "."),
      },
      beforeWriteFile(filePath, content) {
        if (!filePath.endsWith(".d.ts")) return

        return { content: addJavaScriptExtensions(content) }
      },
    }),
  ],
  resolve: { tsconfigPaths: true },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    target: "es2022",
    rollupOptions: {
      // Prevents React from being bundled into your distribution
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        ...runtimeDependencies,
        ...Object.keys(pkg.peerDependencies || {}),
        /^@base-ui\/react/, // Ensures sub-imports are externalized
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo) =>
          assetInfo.names.includes("styles.css")
            ? "styles.css"
            : "assets/[name]-[hash][extname]",
      },
    },
  },
})
