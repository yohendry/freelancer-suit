module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    borderRadius: {
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'theme': '15px',
    },
    outline: {
      blue: '2px solid #0000bb',
    },
    extend: {
      screens: {
        xs: { max: "400px" },
      },
    },
  },
  variants: {},
  plugins: [],
}
