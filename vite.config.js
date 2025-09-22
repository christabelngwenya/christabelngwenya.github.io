import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { transform as esbuildTransform } from 'esbuild'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Pre-transform .js files with JSX using esbuild so Vite's import-analysis can parse them
    {
      name: 'jsx-for-js-pre-transform',
      enforce: 'pre',
      async transform(code, id) {
        const isSrcJs = id.endsWith('.js') && (id.includes('/src/') || id.includes('\\src\\'))
        if (isSrcJs) {
          const result = await esbuildTransform(code, {
            loader: 'jsx',
            jsx: 'automatic',
            sourcemap: true,
            sourcefile: id,
          })
          return { code: result.code, map: result.map }
        }
        return null
      },
    },
    react({
      jsxRuntime: 'automatic',
      include: [/src\/.*\.js$/],
      babel: {
        parserOpts: {
          // Ensure Babel treats .js in src/ as JSX-capable
          plugins: ['jsx'],
        },
      },
    }),
  ],
  esbuild: {
    jsx: 'automatic',
  },
  // Avoid treating public/index.html as an HTML entry by disabling publicDir
  publicDir: false,
  build: {
    rollupOptions: {
      // Explicitly set single HTML entry
      input: resolve(__dirname, 'index.html'),
    },
  },
  server: {
    port: 5173,
  },
})
