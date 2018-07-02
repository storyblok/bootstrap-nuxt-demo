<template>
  <header :class="blok.style.join(' ')"
          v-editable="blok">
    <div class="container">
      <nav class="navbar navbar-expand-md no-gutters">
        <template v-if="blok.logo_in_middle">

          <button class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  :data-target="`#navbar-${blok._uid}`"
                  :aria-controls="`navbar-${blok._uid}`"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="col-4 col-md-2 text-right text-md-center order-lg-6">
            <nuxt-link :to="`/${blok.logo_link.cached_url}`"
                       v-if="blok.logo">
              <img :src="blok.logo"
                   :height="blok.logo_height"
                   alt="Logo">
            </nuxt-link>
          </div>

          <div class="collapse navbar-collapse col-12 col-md-5 order-lg-1"
               :id="`navbar-${blok._uid}`">
            <ul v-if="blok.nav_links && blok.nav_links.length"
                class="navbar-nav"
                :class="blok.main_nav_style.join(' ')">
              <component :key="blok._uid"
                         v-for="blok in blok.nav_links"
                         :blok="blok"
                         :is="blok.component | dashify"></component>
            </ul>
          </div>

          <ul v-if="blok.second_nav_links && blok.second_nav_links.length"
              class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
            <component :key="blok._uid"
                       v-for="blok in blok.second_nav_links"
                       :blok="blok"
                       :is="blok.component | dashify"></component>
          </ul>

        </template>
        <template v-if="!blok.logo_in_middle">

          <div class="col-3 text-left">
            <nuxt-link :to="`/${blok.logo_link.cached_url}`"
                       v-if="blok.logo">
              <img :src="blok.logo"
                   :height="blok.logo_height"
                   alt="Logo">
            </nuxt-link>
          </div>

          <button class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  :data-target="`#navbar-${blok._uid}`"
                  :aria-controls="`navbar-${blok._uid}`"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center col-md-6"
               :id="`navbar-${blok._uid}`">
            <ul v-if="blok.nav_links && blok.nav_links.length"
                class="navbar-nav"
                :class="blok.main_nav_style.join(' ')">
              <component :key="blok._uid"
                         v-for="blok in blok.nav_links"
                         :blok="blok"
                         :is="blok.component | dashify"></component>
            </ul>
          </div>

          <div class="collapse navbar-collapse"
               :id="`navbar-${blok._uid}`"
               v-if="blok.button_text">
            <ul v-if="blok.second_nav_links && blok.second_nav_links.length"
                class="navbar-nav ml-auto justify-content-end">
              <component :key="blok._uid"
                         v-for="blok in blok.second_nav_links"
                         :blok="blok"
                         :is="blok.component | dashify"></component>
            </ul>

            <a class="btn ml-md-3" :href="blok.button_link.cached_url">
              {{ blok.button_text }}
            </a>
          </div>

          <ul v-if="!blok.button_text && blok.second_nav_links"
              class="navbar-nav col-3 justify-content-end d-none d-md-flex">
            <component :key="blok._uid"
                        v-for="blok in blok.second_nav_links"
                        :blok="blok"
                        :is="blok.component | dashify"></component>
          </ul>

        </template>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ['blok']
}
</script>
