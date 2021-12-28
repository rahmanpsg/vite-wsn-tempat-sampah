import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import icons from "vite-plugin-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), icons({ scale: 1.8 })],
});
