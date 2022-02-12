const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    target: 'node',
    externals: [nodeExternals()],
    externalsPresets: {
        node: true,
    },
    output: {
        library: {
            name: 'CLI',
            type: 'commonjs',
            export: 'default',
        },
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
