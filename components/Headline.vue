<template>
  <component v-editable="blok"
             :is="blok.type">
    <strong v-if="blok.strong">{{ blok.text }}</strong>
    <template v-else>{{ blok.text }}</template>
  </component>
</template>

<script>
export default {
  props: ['blok']
}
</script>
