const path = require('path'); //this is common js module format which webpack support 

// If a webpack.config.js is present, the webpack command picks it up by default.
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}