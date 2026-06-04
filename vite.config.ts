import path, { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Automatically compiles your TypeScript declaration files (.d.ts)
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve("src/index.ts"),
      name: "RavenUI",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      // Prevents React from being bundled into your distribution
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
})
