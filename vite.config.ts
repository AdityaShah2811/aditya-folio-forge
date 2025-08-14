import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Vite configuration for the portfolio application
 * Sets up React with SWC compiler for fast builds and development
 * Configures path aliases for cleaner imports
 */
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // React plugin with SWC for fast compilation
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Allow @/ imports from src directory
    },
  },
});
