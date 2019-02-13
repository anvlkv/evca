var path = require('path');
var testHelperPath = path.resolve('src/testHelper.js');

module.exports = function(config) {
    config.set({
        // use the PhantomJS browser // NOPE!
        browsers: ['Chrome'],
        // use Jasmine
        frameworks: ['jasmine', 'karma-typescript'],

        // files that Karma will server to the browser
        files: [
            // entry file for Webpack
            testHelperPath
        ],

        // before serving test/testHelper.js to the browser
        preprocessors: {
            [testHelperPath]: [
                // pass it to karma-typescript
                // 'karma-typescript',
                // use karma-webpack to preprocess the file via webpack
                'webpack',
                // use karma-sourcemap-loader to utilize sourcemaps generated by webpack
                'sourcemap'
            ]
        },

        // webpack configuration used by karma-webpack
        webpack: {
            // generate sourcemaps
            devtool: 'inline-source-map',
            // enzyme-specific setup
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            module: {
                // lint JavaScript with Eslint
                preLoaders: [
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        loader: 'tslint'
                    }
                ],
                // use same loaders as Create React App
                loaders: [
                    {
                        exclude: [
                            /\.(ts|tsx)$/,
                            /\.scss$/,
                            /\.json$/,
                        ],
                        loader: 'file',
                        query: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel'
                    },
                    {
                        test: /\.scss$/,
                        loader: 'style!scss'
                    },
                    {
                        test: /\.json$/,
                        loader: 'json'
                    }
                ]
            },
            // relative path starts out at the src folder when importing modules
            resolve: {
                root: path.resolve('./src')
            }
        },

        webpackMiddleware: {
            // only output webpack error messages
            stats: 'errors-only'
        },
    })
}