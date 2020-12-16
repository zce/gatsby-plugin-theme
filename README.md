# gatsby-plugin-theme

[![Build Status][travis-img]][travis-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> A Gatsby plugin for easily adding [emotion](https://emotion.sh) theme context.

## Installation

```shell
$ npm install gatsby-plugin-theme @emotion/react

# or yarn
$ yarn add gatsby-plugin-theme @emotion/react
```

## Usage

Include the plugin in your `gatsby-config.js` file.

```javascript
module.exports = {
  plugins: ['gatsby-plugin-theme']
}
```

### options

- `theme`: emotion theme context object
- `styles`: emotion global styles

```javascript
// in gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-theme',
      options: {
        theme: {
          primary: '#6b46c1',
          muted: '#667f99'
        },
        styles: t => ({
          body: {
            color: t.primary
          }
        })
      }
    }
  ]
}
```

## Recipes

### Theme Context

in `./gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-theme',
      options: {
        theme: {
          primary: '#6b46c1',
          muted: '#667f99'
        }
      }
    }
  ]
}
```

in `./src/pages/index.js`:

```javascript
import React from 'react'

/** @param {import('gatsby').PageProps} */
export default () => (
  <div css={{ width: 750 }}>
    <h1 css={t => ({ color: t.primary })}>Hello</h1>
  </div>
)
```

### Color Modes

in `./gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-theme',
      options: {
        theme: {
          primary: '#6b46c1',
          muted: '#667f99',
          modes: {
            dark: {
              primary: '#9f7aea',
              muted: '#7e93b4'
            }
          }
        }
      }
    }
  ]
}
```

in `./src/pages/index.js`:

```javascript
import React from 'react'
import { useTheme } from '@emotion/react'

/** @param {import('gatsby').PageProps} */
export default () => {
  const { mode, setMode } = useTheme()
  return (
    <div css={{ width: 750 }}>
      <button onClick={() => setMode('dark')}>dark mode</button>
      <h1 css={t => ({ color: t.primary })}>{mode}</h1>
    </div>
  )
}
```

### Global Styles

in `./gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-theme',
      options: {
        theme: {
          primary: '#6b46c1',
          muted: '#667f99',
          modes: {
            dark: {
              primary: '#9f7aea',
              muted: '#7e93b4'
            }
          }
        },
        styles: t => ({
          body: {
            color: t.primary
          }
        })
      }
    }
  ]
}
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-img]: https://img.shields.io/travis/com/zce/gatsby-plugin-theme
[travis-url]: https://travis-ci.com/zce/gatsby-plugin-theme
[codecov-img]: https://img.shields.io/codecov/c/github/zce/gatsby-plugin-theme
[codecov-url]: https://codecov.io/gh/zce/gatsby-plugin-theme
[license-img]: https://img.shields.io/github/license/zce/gatsby-plugin-theme
[license-url]: https://github.com/zce/gatsby-plugin-theme/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/gatsby-plugin-theme
[downloads-url]: https://npmjs.org/package/gatsby-plugin-theme
[version-img]: https://img.shields.io/npm/v/gatsby-plugin-theme
[version-url]: https://npmjs.org/package/gatsby-plugin-theme
[dependency-img]: https://img.shields.io/david/zce/gatsby-plugin-theme
[dependency-url]: https://david-dm.org/zce/gatsby-plugin-theme
[devdependency-img]: https://img.shields.io/david/dev/zce/gatsby-plugin-theme
[devdependency-url]: https://david-dm.org/zce/gatsby-plugin-theme?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
