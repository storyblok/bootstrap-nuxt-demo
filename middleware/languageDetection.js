import Vue from 'vue'

export default function ({ app, route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = route.params.language || 'en'

  if (typeof window !== 'undefined' && window.StoryblokToken) {
    Vue.prototype.$storyapi.accessToken = window.StoryblokToken
  }

  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion')
  }

  if (!store.state.settings._uid) {
    store.dispatch('loadSettings', {version: version})
  }
}
