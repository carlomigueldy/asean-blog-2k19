<template>
    <section class="hero is-medium is-dark" style="height: 25rem;"> 
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            {{ title }}
          </h1>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
    },
}
</script>