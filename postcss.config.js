const tailwindCSS = require('tailwindcss')

module.exports = {
    plugins: [
        tailwindCSS('./tailwind.js'),
        require('autoprefixer')
    ]
}