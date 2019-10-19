<template>
  <div>
    <Navbar title="Be The Change"/>
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
.is-primary {
  background-color: #03aa6f;
}

html {
  scroll-behavior: smooth;
}

.mx-5 {
  margin-left: 15rem; 
  margin-right: 15rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>