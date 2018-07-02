<template>
  <li v-editable="blok"
      class="nav-item"
      :class="{'active': isActive}">
    <nuxt-link class="nav-link"
               :to="`/${blok.link.cached_url}`">
      <i v-if="blok.icon && blok.icon.icon"
         :class="`${blok.icon.type} ${blok.icon.icon}`"></i>

      <img alt="image"
           :src="blok.image"
           height="40"
           v-if="blok.image">
      {{ blok.name }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    isActive() {
      if (typeof window !== 'undefined' && window.location.pathname.indexOf(this.blok.link.cached_url) > -1) {
        return true
      }
      return false
    }
  }
}
</script>
