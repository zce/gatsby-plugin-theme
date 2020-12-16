/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 *
 * Ref:
 * - https://github.com/emotion-js/emotion/blob/master/site/plugins/gatsby-plugin-emotion-next-compat/gatsby-browser.js
 */

// @ts-check

import React from 'react'
import { CacheProvider, Global } from '@emotion/react'

import ThemeProvider from './theme-provider'
import { global, local } from './emotion-cache'

const defaultTheme = {}

/**
 * @param {import('gatsby').WrapRootElementBrowserArgs} args
 * @param {{ theme: any, styles: any }} options
 */
export const wrapRootElement = ({ element }, options) => (
  <ThemeProvider theme={Object.assign(defaultTheme, options.theme)}>
    {options.styles && <CacheProvider value={global}><Global styles={options.styles} /></CacheProvider>}
    <CacheProvider value={local}>{element}</CacheProvider>
  </ThemeProvider>
)

/** @type {import('gatsby').GatsbyBrowser['onClientEntry']} */
export const onClientEntry = () => {
  // for prevent flashing
  window.addEventListener('themeready', () => {
    // ensure theme color mode ready
    document.body.style.opacity = null
  })
}
