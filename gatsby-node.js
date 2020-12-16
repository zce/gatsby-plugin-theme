/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 *
 * Ref:
 * - https://github.com/emotion-js/emotion/blob/master/packages/babel-preset-css-prop/src/index.js
 * - https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin#options
 */

// @ts-check

// jsx pragmatic

/** @type {import('gatsby').GatsbyNode['onCreateWebpackConfig']} */
exports.onCreateBabelConfig = async ({ actions }) => {
  actions.setBabelPreset({
    name: '@emotion/babel-preset-css-prop',
    options: {
      sourceMap: process.env.NODE_ENV !== 'production'
    }
  })
}
