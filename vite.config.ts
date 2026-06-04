import { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import pkg from "./package.json"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
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
    }),
  ],
  resolve: { tsconfigPaths: true },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "RavenUI",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      // Prevents React from being bundled into your distribution
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        /^@base-ui\/react/, // Ensures sub-imports are externalized
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
})
