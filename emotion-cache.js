import createEmotionCache from '@emotion/cache'

const createCache = () => createEmotionCache({ key: 'z' })

export const global = createCache()

export const local = createCache()
