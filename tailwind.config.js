/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,html,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0px 4px 25px 0px #CD06FFCC',
        '2xl':'-11.18px  11.18px 11.18px 0px rgba(255, 255, 255, 0.4) inset',
        'xl':'11.18px -11.18px 11.18px 0px rgba(182, 182, 182, 0.4) inset'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        primary:"#2D0546",
        lightPrimary:"#FFFFFF",
        lightSecondary:"rgba(204, 0, 255, 0.8)",
        lightTopMenu:"#A25DB3",
        lightSearchBox:"rgba(233, 198, 241, 0.8)",
        secondary:"#F5931E",
        textPrimary:"#FFFFFF",
        textSecondary:"#000000",
        darkTopMenu:"rgba(81, 79, 79, 0.44)",
        border:"rgba(217, 217, 217, 0.1)",
        loginButton:"rgba(205, 6, 255, 0.8)",
        subscriptionGradFrom:"rgba(242, 194, 254, 0.8)",
        subscriptionGradVia:"rgba(108, 0, 135, 0.64)",
        subscriptionGradTo:"rgba(123, 4, 153, 0.8)",
        darkAllCategoriesBg:"rgba(52, 95, 150, 0.5)",
        lightAllCategoriesBg:'#EDD1F4',
        cardDiv:"rgba(217, 217, 217, 0.1)",
        productBorderFrom:"rgba(127, 8, 156, 0.8)",
        productBorderTo:"rgba(254, 248, 255, 0.8)",
        buyNowBtn:"rgba(141, 139, 142, 0.5)"

      },
      fontFamily:{
        inter:"Inter, sans-serif",
        inknut:"Inknut Antiqua, sans-serif",
      }
    },
  },
  plugins: [],
}

