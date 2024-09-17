import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Default build options
  build: {
    outDir: "dist", // The output directory for production build
    assetsDir: "assets", // Directory to place static assets in
    sourcemap: false, // Whether to generate sourcemaps (useful for debugging)
    minify: "esbuild", // Minifier used (default is esbuild, faster than terser)
    target: "esnext", // Target environment for the build (modern browsers)
    cssCodeSplit: true, // CSS will be code-split into separate files
    rollupOptions: {
      input: "index.html", // Default entry point is index.html
    },
    emptyOutDir: true, // Clear the output directory before building
    chunkSizeWarningLimit: 500, // Max chunk size before warning is shown (in KB)
  },

  // Default dev server options
  server: {
    host: "localhost", // Local dev server host
    port: 5173, // Default dev server port
    open: false, // Whether to automatically open the browser
    strictPort: false, // If true, will throw error if port is already in use
    https: false, // Use HTTP, unless explicitly changed to HTTPS
    cors: true, // Enable CORS for dev server
    proxy: {}, // No proxy by default (can configure API proxying if needed)
    hmr: {
      // Hot Module Replacement (HMR) settings
      overlay: true, // Show errors as an overlay on the browser window
    },
  },

  // Default resolve options (for path aliases, extensions, etc.)
  resolve: {
    alias: {}, // No default path aliases
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // File extensions to resolve
  },

  // Default CSS-related options
  css: {
    modules: {
      // CSS Modules config
      scopeBehaviour: "local", // Use CSS modules by default (scoped)
    },
    preprocessorOptions: {}, // Preprocessor-specific settings (like Sass, Less)
    devSourcemap: false, // Don't generate sourcemaps for CSS by default
  },

  // Default optimization options
  optimizeDeps: {
    include: [], // List of dependencies to pre-bundle (auto-detected by default)
    exclude: [], // List of dependencies to exclude from pre-bundling
    esbuildOptions: {}, // Additional esbuild options
  },

  // Default options for build-time environment variables
  envPrefix: "VITE_", // All environment variables prefixed with VITE_ are available in your code

  // Default logging level
  logLevel: "info", // Control verbosity of logs (can be 'info', 'warn', or 'error')

  // Default behavior for dependency pre-bundling
  esbuild: {
    jsxInject: `import React from 'react'`, // Auto-inject React import for JSX (if needed)
  },
});
