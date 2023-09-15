import { defineConfig } from "vite";
import daisyui from "daisyui";

export default defineConfig({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui],
});
