export default function ({ app, route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = route.params.language || 'en'

  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion')
  }

  if (!store.state.settings._uid) {
    store.dispatch('loadSettings', {version: version})
  }
}
