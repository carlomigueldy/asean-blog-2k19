<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-2by1">
      <img :src="header" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{ title }}</p>
      </div>
    </div>

    <div class="content">
      {{ description }}
      <b-taglist>
        <b-tag v-for="(tag, index) in tags" 
          :key="index"
          type="is-dark"
          rounded>
          #{{ tag }}
        </b-tag>
      </b-taglist>
      <br>
    </div>

    <section class="has-text-centered">
        <b-button
          size="is-medium"
          type="is-primary"
          @click="goTo(route)" 
          outlined
          rounded>
          Read More 
            <b-icon 
            icon="arrow-right" 
            size="is-small">
            </b-icon>
        </b-button>
    </section>
  </div>
</div>
</template>

<script>
export default {
    props: {
        header: String,
        title: String,
        description: String,
        tags: Array,
        route: String,
    },
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName })
      },
    }
}
</script>