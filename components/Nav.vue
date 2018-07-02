<template>
  <ul v-editable="blok"
      class="nav"
      :class="blok.style.join(' ')">
    <component :key="blok._uid"
               v-for="blok in blok.body"
               :blok="blok"
               :is="blok.component | dashify"></component>
  </ul>
</template>

<script>
export default {
  props: ['blok']
}
</script>
