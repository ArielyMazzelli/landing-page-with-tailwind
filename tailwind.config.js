/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      colors: {
        lightRed: "hsl(356, 100%, 66%)",
        hoverbg: "hsl(355, 100%, 74%)",
        headings: "hsl(208, 49%, 24%)",
        grayishblue: " hsl(240, 2%, 79%)",
        darkgrayishblue: "hsl(207, 13%, 34%)",
        blackblue: "hsl(240, 10%, 16%)",
        bgcard: " rgb(57, 58, 88)",
      },
      backgroundImage: {
        "header-image-desktop":
          "url('/build/images/bg-pattern-intro-desktop.svg')",
        "header-image-mobile":
          "url('/build/images/bg-pattern-intro-mobile.svg')",
        "images-circles": "url('/build/images/bg-pattern-circles.svg')",
        "editor-desktop":
          "url('/build/images/illustration-editor-desktop.svg')",
        "editor-mobile": "url('/build/images/illustration-editor-mobile.svg')",
        "laptop-desktop":
          "url('/build/images/illustration-laptop-desktop.svg')",
        "laptop-mobile": "url('/build/images/illustration-laptop-mobile.svg')",
      },
      height: {
        superbig: "40rem",
      },
      width: {
        big: "150%",
      },
    },
  },
  plugins: [],
};
