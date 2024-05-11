/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#2E7C71',
        secondary: '#FFE9A8',
      },
      fontFamily: {
        display: 'Oswald, Helvetica, Arial, sans-serif',
        sans: '"Open Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  plugins: [],
}
