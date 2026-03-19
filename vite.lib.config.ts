import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components/ui/**", "src/lib/**", "src/index.ts"],
      outDir: "dist/types",
      tsconfigPath: "./tsconfig.lib.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "GUi",
      formats: ["es"],
      fileName: "index",
    },
    outDir: "dist/lib",
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@base-ui\/react/,
      ],
      output: {
        preserveModules: false,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});
