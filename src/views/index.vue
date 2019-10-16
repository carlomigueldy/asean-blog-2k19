<template>
  <div>
    <section class="hero is-large my-parallax"> 
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">
            MSUIIT ASEAN Blog
          </h1>
          <h2 class="subtitle has-text-white">
            ASEAN College of Computer Studies Lorem Ipsum
          </h2>
        </div>
      </div>
    </section>

    <div class="section">
      <div class="container">

        <div class="columns">
          <div class="column">
            <Card 
              header="https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Mga hinog na prutas"
              description="Maka gutom lantawon."
              :tags="['msuiit', 'dakilang pamantasan']"
              route="one"
            />
          </div>
          <div class="column">
            <Card 
              header="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Happy langoy langoy"
              description="Nindot ang pag langoy-langoy sa turtle."
              :tags="['carlo', 'miguel', 'dy']"
              route="two"
            />
          </div>
          <div class="column">
            <Card 
              header="https://images.pexels.com/photos/2131899/pexels-photo-2131899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="NFA Rice"
              description="Mag lung-ag nata ug rice."
              :tags="['banaue', 'rice']"
              route="three"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'home',
  components: {
    Card,
  }
}
</script>

<style scoped>
.my-parallax {
  min-height: 100%;
  width: 100%;
  background-position: center; 
  background-attachment: fixed; 
  background-image: linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>