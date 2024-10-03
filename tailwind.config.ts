import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './public/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  plugins: [],
}
export default config
