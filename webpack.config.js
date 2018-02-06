module.exports = {

    entry: [
        "./app/app.jsx",
    ],

    output: {
        path:  __dirname,
        filename: "./public/bundle.js",
    },

    resolve: {
        extensions: [ '.js', '.jsx'],
        alias: {
            Page: __dirname + '/app/components/page.jsx',
            SmartMenu: __dirname + '/app/components/smart-menu.jsx',
        }
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                        presets: [ 'react', 'env', 'stage-0']
                    },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                }]
            }
        ],
    },

    devtool: 'cheap-module-eval-source-map', // just for you to watch things ;)
};