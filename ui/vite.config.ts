import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// also don't forget to `npm i -D @types/node`, so __dirname won't complain

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})

