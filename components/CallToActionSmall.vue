<template>
  <div v-editable="blok">
    <img alt="image"
         class="fdb-icon"
         :src="blok.image">
    <h3>{{ blok.headline }}</h3>
    <p>{{ blok.text }}</p>
    <p class="mt-3">
      <a class="btn"
         :href="blok.button_link.cached_url">
        {{ blok.button_text }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
