const path = require('path'); //this is common js module format which webpack support 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //this plugin is used to clear any irrelevant files in dest folder 

/**
 * Plugin vs Loader
 * 
 * Plugin operates after and over whole bundle.They transform the output
 * Loader operates while creating bundle and they tranform the assets into webpack understandable modules
 * 
 */

// If a webpack.config.js is present, the webpack command picks it up by default.
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js' 
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: 'Output Management'
        }),
    ],
    output: {
        filename: '[name].dundle.js',
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}