/* eslint-disable import/no-commonjs */
const baseConfig = require('./webpack.config');
const { join } = require('path');

module.exports = {
  ...baseConfig,
  entry: `./docs/source/javascripts/${(import.meta.env.BUNDLE || process.env.BUNDLE)}.js`,
  output: {
    path: join(__dirname, 'docs/.webpack/js'),
    filename: `${(import.meta.env.BUNDLE || process.env.BUNDLE)}.js`,
  },
};
/* eslint-enable import/no-commonjs */
