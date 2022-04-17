module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.MODE === 'production' ? { cssnano: {} } : {})
  },
}
