module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            },              
        ]
    },
    node: {
        fs: "empty"
    }
};