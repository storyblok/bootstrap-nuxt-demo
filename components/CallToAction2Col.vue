<template>
  <section class="fdb-block"
           v-editable="blok">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-sm-3 text-center"
             v-if="blok.style == 'right'">
          <a class="btn"
             :href="blok.button_link.cached_url">
            {{ blok.button_text }}
          </a>
        </div>
        <div class="col-12 col-sm-9 text-center text-sm-right mt-4 mt-sm-0"
             v-if="blok.style == 'right'">
          <h2>{{ blok.headline }}</h2>
        </div>
        <div class="col-12 col-sm-9 text-left"
             v-if="blok.style != 'right'">
          <h2>{{ blok.headline }}</h2>
        </div>
        <div class="col-12 col-sm-3 text-left text-sm-center mt-4 mt-sm-0"
             v-if="blok.style != 'right'">
          <a class="btn"
             :href="blok.button_link.cached_url">
            {{ blok.button_text }}
          </a>
        </div>
      </div>

      <div class="row pt-5"
           v-if="blok.image">
        <div class="col-12">
          <img alt="image"
               class="img-fluid"
               :src="blok.image">
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  props: ['blok']
}
</script>
