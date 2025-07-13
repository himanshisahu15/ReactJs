/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        helpyellow:'#F7CA10',
        yellow:'#f9d642',
         helpblue: '#257ac4',
        primary: "#0f79af",
        background: "#000000",
        text: "#ffffff",
        card: "#1f1f1f",
        accent: "#00a8e1",
      },
      fontFamily: {
        prime: ['"Roboto"', 'system-ui', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
