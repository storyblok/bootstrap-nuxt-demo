<template>
  <component v-editable="blok"
             :is="blok.is_inline ? 'span' : 'p'"
             :class="blok.paragraph_style.join(' ')">
    <a :href="blok.link.cached_url"
       class="btn"
       :class="blok.style.join(' ')"
       target="_blank">
      {{ blok.text }}
    </a>
  </component>
</template>

<script>
export default {
  props: ['blok']
}
</script>
