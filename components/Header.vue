<template>
  <header :class="blok.style.join(' ')"
          v-editable="blok">
    <div class="container"
         :class="blok.container_style.join(' ')">
      <nav class="navbar"
           :class="blok.navbar_style.join(' ')">

        <nuxt-link :class="blok.logo_style.join(' ')"
                   :to="`/${blok.logo_link.cached_url}`"
                   v-if="blok.logo">
          <img :src="blok.logo"
               :height="blok.logo_height"
               alt="Logo">
        </nuxt-link>

        <button v-if="!blok.hide_navi"
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                :data-target="`#navbar-${blok._uid}`"
                :aria-controls="`navbar-${blok._uid}`"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div v-if="!blok.hide_navi"
             class="collapse navbar-collapse"
             :id="`navbar-${blok._uid}`">

          <ul v-if="blok.nav_links && blok.nav_links.length"
              class="navbar-nav"
              :class="blok.main_nav_style.join(' ')">
            <component :key="blok._uid"
                       v-for="blok in blok.nav_links"
                       :blok="blok"
                       :is="blok.component | dashify"></component>
          </ul>

          <ul v-if="blok.second_nav_links && blok.second_nav_links.length"
              class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
            <component :key="blok._uid"
                       v-for="blok in blok.second_nav_links"
                       :blok="blok"
                       :is="blok.component | dashify"></component>
          </ul>

          <a v-if="blok.button_text"
             class="btn btn-empty ml-md-3"
             :href="blok.button_link.cached_url">
            {{ blok.button_text }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ['blok']
}
</script>
