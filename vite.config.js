import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-dom/client", "netlify-identity-widget"],
    },
  },
});

// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default {
//   // other configurations
//   build: {
//     rollupOptions: {
//       external: ["react-dom/client"],
//     },
//   },
// };
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       external: ["netlify-identity-widget"],
//     },
//   },
// });
