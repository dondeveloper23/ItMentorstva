const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production",
    entry: {
        main: "./src/index.js",
        article: "./src/article.js",
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new Dotenv()
    ],
};