// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const paths = require('./paths');
const getClientEnvironment = require('./env');

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

// Note: defined here because it will be used more than once.
const cssFilename = 'static/css/[name].[contenthash:8].css';

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
  // The build folder.
  outDir: paths.appBuild || './dist',
  outFile: 'index.html', // The name of the outputFile
  // We inferred the "public path" (such as / or /my-project) from homepage.
  publicUrl: publicPath,
  watch: false,
  cache: false,
  cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
  minify: true, // minify prod
  scopeHoist: true, // as per https://github.com/sw-yx/create-react-app-parcel/issues/17
  target: 'browser', // browser/node/electron, defaults to browser
  https: false, // Server files over https or http, defaults to false
  logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  hmrPort: 0, // The port the hmr socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  sourceMaps: shouldUseSourceMap,
  hmrHostname: '', // A hostname for hot module reload, default to ''
  detailedReport: true, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
  output: {
    // parcel doesnt need this at all but this shims CRA's webpack.config.prod.js
    publicPath: publicPath,
  },
};
