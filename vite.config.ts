import path from "path";

import { defineConfig } from "vite";

// plugins
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

/// <reference types="vitest" />

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-library",
      formats: ["es", "umd"],
      fileName: (format) => `react-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
});
