import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The real site serves from the root of its own domain, so base is '/'.
// A GitHub Pages project site serves from /<repo>/ instead — set PUBLIC_BASE
// for that build and every asset, route and image path follows it.
export default defineConfig({
  plugins: [react()],
  base: process.env.PUBLIC_BASE || '/',
})
