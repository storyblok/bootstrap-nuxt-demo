<template>
  <section v-editable="blok"
           class="fdb-block"
           :class="blok.section_style.join(' ')"
           :style="{'backgroundImage': `url(${blok.background})`}">
    <div class="container"
         :class="blok.container_style.join(' ')">
      <div class="row"
           :class="blok.row_style.join(' ')">
        <div class="col-12 col-sm-6"
             v-if="blok.image && blok.image_position == 'left'">
          <img alt="Image"
               class="img-fluid"
               :src="blok.image" />
        </div>

        <div :class="columnStyle">

          <img :alt="blok.icon_alt_text"
               height="40"
               class="fdb-icon"
               :src="blok.icon"
               v-if="blok.icon">

          <p class="mb-5 mt-5"
             v-if="blok.logo">
            <img :alt="blok.logo_alt_text"
                 height="40"
                 :src="blok.logo">
          </p>

          <div :class="boxStyle">

            <h1 v-if="blok.headline">
              {{ blok.headline }}
            </h1>

            <h2 v-if="blok.headline_2">
              {{ blok.headline_2 }}
            </h2>

            <h3 v-if="blok.subheadline">
              <strong>
                {{ blok.subheadline }}
              </strong>
            </h3>

            <markdown v-if="blok.text"
                      :text="blok.text">
            </markdown>

            <p v-if="blok.social_icons"
               class="text-h2">
              <component :key="blok._uid"
                         v-for="blok in blok.social_icons"
                         :blok="blok"
                         :is="blok.component | dashify"></component>
            </p>

            <component :key="blok._uid"
                       v-for="blok in blok.buttons"
                       :blok="blok"
                       :is="blok.component | dashify"></component>

          </div>

          <div class="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5"
               v-if="blok.image && blok.image_position == 'left'">
            <img alt="image"
                 class="img-fluid br-0"
                 :src="blok.image">
          </div>

        </div>

        <component :key="blok._uid"
                   v-for="blok in blok.bottom_body"
                   :blok="blok"
                   :is="blok.component | dashify"></component>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    boxStyle() {
      if (this.blok.in_box) {
        return `fdb-box ${(this.box_style || []).join(' ')}`
      }
      return ''
    },
    columnStyle() {
      let style = this.blok.column_style.join(' ') + ' '
      style += this.blok.width.xsmall ? `col-${this.blok.width.xsmall} ` : ''
      style += this.blok.width.small ? `col-sm-${this.blok.width.small} ` : ''
      style += this.blok.width.medium ? `col-md-${this.blok.width.medium} ` : ''
      style += this.blok.width.large ? `col-lg-${this.blok.width.large} ` : ''
      style += this.blok.width.xlarge ? `col-xl-${this.blok.width.xlarge} ` : ''
      return style
    }
  }
}
</script>
