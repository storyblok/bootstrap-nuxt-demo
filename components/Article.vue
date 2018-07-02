<template>
  <section class="fdb-block"
           v-editable="blok">
    <div class="container">
      <div class="row">
        <div class="col-8 text-left">
          <h2>{{ blok.title }}</h2>

          <img :src="blok.teaser_image | resize('800x0')"
               class="img-fluid"
               alt="image"
               v-if="blok.teaser_image" />

          <p>
            <markdown :text="blok.intro">
            </markdown>
          </p>

          <markdown :text="blok.long_text">
          </markdown>
        </div>
        <div class="col-4">
          <h3>Author</h3>
          <div class="d-flex align-items-center mb-2">
            <div class="mr-2">
              <img height="30" :src="author.content.image" />
            </div>
            <p>
              {{ author.content.name }}
            </p>
          </div>

          <h3 class="mt-5">Categories</h3>
          <ul class="list-unstyled mb-0">
            <li v-for="category in categories"
                :key="category.id">
              <a :href="`?filter=${category.uuid}`">{{ category.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      author: { content: {} },
      categories: []
    }
  },
  mounted() {
    this.$storyapi.get(`cdn/stories/${this.blok.author.id}`, {
        find_by: 'uuid',
        cv: this.$store.state.cacheVersion
      })
      .then((res) => {
        this.author = res.data.story
      })
      .catch((res) => {
        console.error('Failes to load resource', res)
      })

    this.$storyapi.get('cdn/stories', {
        starts_with: 'categories/',
        cv: this.$store.state.cacheVersion
      })
      .then((res) => {
        this.categories = res.data.stories
      })
      .catch((res) => {
        console.error('Failes to load resource', res)
      })
  }
}
</script>
