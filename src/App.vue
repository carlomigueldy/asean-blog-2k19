<template>
  <div>
    <Navbar title="agriBlog" />
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Agricultural Blog
          </h1>
          <h2 class="subtitle">
            ASEAN Chuchu
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content">
              Char lang.
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
  }
}
</script>
