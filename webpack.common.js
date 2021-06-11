const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nilla.js',
        library: {
            name: 'nillaJS',
            type: 'umd'
        }
    },
}