
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    extend: {

      keyframes: {
        fade: {
          "0%, 100%": { opacity: "0" }, 
          "50%": { opacity: "1" },     
        },
      },
      animation: {
        fade: "fade 3s ease-in-out infinite", // 3-second fade animation
      },
    
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans :['sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
     
      screens: {
        "wide": "1440px"
      }
    },
  
  plugins: [],
};
