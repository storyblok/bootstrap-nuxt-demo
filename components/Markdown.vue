<template>
  <div v-html="markdownText">
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['text'],
  computed: {
    markdownText() {
      if (typeof this.text !== 'undefined') {
        return marked(this.text)
      }
      return ''
    }
  }
}
</script>
