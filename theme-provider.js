import { useState, useEffect } from 'react'
import { jsx, ThemeProvider } from '@emotion/react'

const storageKey = 'z-theme-mode'

const defaultTheme = {}

const getInitialMode = () => {
  if (!window) return 'default'
  if (!window.localStorage) return 'default'
  const mode = window.localStorage.getItem(storageKey)
  if (mode) return mode
  if (window.matchMedia) return 'default'
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'default'
}

export default ({ theme, children }) => {
  // ssr can not get initial state.
  const [mode, setMode] = useState('default')

  useEffect(() => {
    // for ssr (running in browser)
    setMode(getInitialMode())
    // theme ready signal (for prevent the page from flashing)
    window.dispatchEvent(new window.Event('themeready'))
  }, [mode])

  const { modes = {}, ...rest } = { ...defaultTheme, ...theme }

  // apply theme mode
  theme = {
    ...rest,
    ...modes[mode],
    mode,
    setMode: value => {
      if (value === mode) return
      window.localStorage.setItem(storageKey, value)
      setMode(value)
    }
  }

  return jsx(ThemeProvider, { theme }, children)
}
