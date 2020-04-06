const path = require('path'); //this is common js module format which webpack support 

// If a webpack.config.js is present, the webpack command picks it up by default.
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                /**
                 * using this loader whenever there is import '.styles.css',
                 * a <style> tag with the stringified css will be inserted into the <head> of your html file.
                 */
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}