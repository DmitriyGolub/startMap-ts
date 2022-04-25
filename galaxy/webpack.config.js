const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
1
module.exports = {
    mode: 'development',
    entry: './src/app.ts',

    output: {
        filename: 'game.bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|webp|ttf|eot|otf|svg|ico|woff(2)?)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(atlas|glsl)$/,
                type: 'asset/source',
            },
            {
                test: /\.(obj|fbx|gltf|drc|mtl|glb)$/i,
                type: 'asset/resource',
            },
        ],
    },


    watchOptions: {
        ignored: /node_modules/
    },


    devServer: {
        static: path.resolve(__dirname, 'build'),
        hot: true,
        open: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            // filename: 'build/index.html',
            template: 'src/index.html',
        }),
    ]

}