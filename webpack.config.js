const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
    hash: true
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'styles/main.css'
});

var isProd = (process.env.NODE_ENV === 'production');

console.log(process.env.NODE_ENV);

// Conditionally return a list of plugins to use based on the current environment.
// Repeat this pattern for any other config key (ie: loaders, etc).
function getPlugins() {
    var plugins = [];

    // Always expose NODE_ENV to webpack, you can now use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': process.env.NODE_ENV
        }
    }));

    // Conditionally add plugins for Production builds.
    if (isProd) {
        plugins.push(
            HTMLWebpackPluginConfig,
            ExtractTextPluginConfig
        );
    }

    // Conditionally add plugins for Development
    else {
        plugins.push(
            HTMLWebpackPluginConfig,
            ExtractTextPluginConfig,
            new webpack.HotModuleReplacementPlugin()
            // new webpack.optimize.UglifyJsPlugin()
        );
    }

    return plugins;
}

function sourceMapType() {
    return (isProd) ? false : 'source-map';
}

// Export Webpack configuration.
module.exports = {
    plugins: getPlugins(),
    cache: true,
    entry: [
        path.join(__dirname, 'app/js/', 'main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/bundle.js'
        // publicPath: path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: __dirname + '/dist',
        hot: true,
        historyAPIFallback: true,
        port: 3030
    },
    devtool: sourceMapType(),
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(json|pdf)$/i,
                exclude: /node_modules/,
                loader: 'url-loader'
            },
            {
                test: /\.(jpe?g|png|svg)$/i,
                exclude: /node_modules/,
                loader: 'file?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]'
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /node_modules|images/,
                loader: 'file?hash=sha512&digest=hex&name=styles/fonts/[name].[ext]'
            }
        ]
    }
};