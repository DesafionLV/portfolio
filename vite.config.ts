import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true'
const isUserOrOrgSite = repositoryName.endsWith('.github.io')
const githubPagesBase =
  isGitHubPagesBuild && repositoryName && !isUserOrOrgSite ? `/${repositoryName}/` : '/'

export default defineConfig({
  base: githubPagesBase,
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
