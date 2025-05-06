import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// load `.env` into process.env
dotenv.config()
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
