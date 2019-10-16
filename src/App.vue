<template>
  <div>
    <Navbar title="ASEAN | Be the change"/>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>