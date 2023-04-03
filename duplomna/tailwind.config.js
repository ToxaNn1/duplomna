/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "x-sm": { max: "475px" },
        "md-max": { max: "821px" },
        md: "821px",
        "tablet-p": { min: "601px", max: "821px" },
      },
      colors: {
        "neon-blue": "var(--neon-blue)",
        "dodger-blue": "var(--dodger-blue)",
        mako: "var(--mako)",
        cinder: "var(--cinder)",
        amazon: "var(--amazon)",
        desert: "var(--desert)",
        "silver-sand": "var(--silver-sand)",
      },
    },
  },
  plugins: [],
};
