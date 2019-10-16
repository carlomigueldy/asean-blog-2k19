<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="header" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">This is the Blog post title, on click it opens a page of its content</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
      <b-tag-list>
        <b-tag 
          rounded>
          #ASEAN
        </b-tag>
        <b-tag 
          rounded>
          #MSUIIT
        </b-tag>
      </b-tag-list>
      <br>
    </div>

    <section class="has-text-centered">
        <b-button
          size="is-medium"
          @click="goTo(post)" 
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
    },
}
</script>