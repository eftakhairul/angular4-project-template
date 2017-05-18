var webpack  = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/main',
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: 'app.bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*','.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
                   // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        })
    ]  
}