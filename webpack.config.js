'use strict';

// External Modules
const Webpack = require('webpack');
const Path = require('path');
const NodeExternals = require('webpack-node-externals');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

// Constants
const TYPESCRIPT_IGNORE = /(?:node_modules)$/;
const NODE_EXTERNALS_WHITELIST = [/^@bluecewe\/[\w-]+/];

module.exports =
{
	mode: 'development',
	target: 'node',
    entry:
    {
        index: './src/Modules/index.ts'
    },
    resolve:
    {
        extensions: ['.ts', '.js'],
        alias:
        {
            src: __dirname + '/src'
        }
    },
    output:
    {
        filename: '[name].js',
        path: Path.resolve(__dirname, './'),
        libraryTarget: 'umd'
    },
    watch: true,
    module:
    {
        rules:
        [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: TYPESCRIPT_IGNORE
            }
        ]
    },
    plugins:
    [
        new ExtraWatchWebpackPlugin
        (
            {
                files: ['./package.json']
            }
        ),
        new Webpack.DefinePlugin
        (
            {
                MODULE_VERSION: Webpack.DefinePlugin.runtimeValue
                (
                    () =>
                    {
                        const packageJsonPath = Path.resolve(process.cwd(), 'package.json');
                        delete require.cache[packageJsonPath];
                        const version = require('./package.json').version;
                        return JSON.stringify(version);
                    },
                    true
                )
            }
        )
    ],
	externals:
	[
		NodeExternals({whitelist: NODE_EXTERNALS_WHITELIST})
	]
};