export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* 🎨 Colors */
      colors: {
        midnight: "#003366",
        golden: "#FFD700",
      },

      /* 🔤 Font Families */
      fontFamily: {
        serif: ["Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* 🔠 Font Sizes */
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2", fontWeight: "800" }], // 56px
        h2: ["2.75rem", { lineHeight: "1.25", fontWeight: "700" }], // 44px
        h3: ["2rem", { lineHeight: "1.3", fontWeight: "600" }], // 32px

        p: ["1rem", { lineHeight: "1.7", fontWeight: "400" }], // 16px
        span: ["0.95rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
