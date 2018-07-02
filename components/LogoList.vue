<template>
  <div v-editable="blok">
    <div class="row pt-5 pb-3">
      <div class="col-12 text-center">
        <p><strong>{{ blok.logo_headline }}</strong></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <component :key="blok._uid"
                   v-for="blok in blok.logos"
                   :blok="blok"
                   :is="blok.component | dashify"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
