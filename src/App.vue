<template>
  <div>
    <Navbar title="ASEAN"/>
    <router-view/>
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
  }
}
</script>

<style>
.mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

.mb-3 {
  margin-bottom: 3rem;
}

.mb-4 {
  margin-bottom: 4rem;
}

.mb-5 {
  margin-bottom: 5rem;
}
</style>