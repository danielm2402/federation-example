const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    entry: './src/main',
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
        new ModuleFederationPlugin({
            name: "app1",
            remotes: {
                app2: "app2@[app2Url]/remoteEntry.js",
            },
            shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
