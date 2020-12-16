/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 *
 * Ref:
 * - https://github.com/emotion-js/emotion/blob/master/site/plugins/gatsby-plugin-emotion-next-compat/gatsby-ssr.js
 */

// @ts-check

import React from 'react'
import { renderToString } from 'react-dom/server'
import createEmotionServer from '@emotion/server/create-instance'

import { local } from './emotion-cache'

export { wrapRootElement } from './gatsby-browser'

const { extractCritical } = createEmotionServer(local)

/** @type {import('gatsby').GatsbySSR['replaceRenderer']} */
export const replaceRenderer = async ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString
}) => {
  // Don't extract while developing.
  if (process.env.NODE_ENV !== 'production') return
  // TODO: extract global styles
  // extract styles
  const { ids, css, html } = extractCritical(renderToString(bodyComponent))
  setHeadComponents(
    <style
      key='emotion'
      data-emotion={`${local.key} ${ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: css }}
    />
  )
  replaceBodyHTMLString(html)
}

/** @type {import('gatsby').GatsbySSR['onRenderBody']} */
export const onRenderBody = async ({ setBodyAttributes }) => {
  // for prevent flashing
  setBodyAttributes({
    style: {
      opacity: 0,
      transition: 'opacity 300ms'
    }
  })
}
