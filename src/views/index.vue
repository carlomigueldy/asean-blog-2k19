<template>
  <div>
    <section class="hero is-medium my-parallax"> 
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1 has-text-centered has-text-white">
            BE THE CHANGE.
          </h1>
          <h2 class="subtitle has-text-centered has-text-white">
            A blog on sustainability. 
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Card 
          header="https://images.pexels.com/photos/2505705/pexels-photo-2505705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Sustainable Actions"
          description="Maka gutom lantawon."
          :tags="['msuiit', 'dakilang pamantasan']"
          route="one"
        />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Card 
          header="https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Teaching Kids About Climate Change"
          description="Nindot ang pag langoy-langoy sa turtle."
          :tags="['carlo', 'miguel', 'dy']"
          route="two"
        />
      </div>
    </section>

    <section class="hero is-small is-light"> 
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Tell us how you'll do it
          </h1>
          <div class="field">
            <div class="control">
              <div class="field">
                <div class="control">
                  <input 
                  class="input is-large" 
                  type="text" 
                  placeholder="Your name">
                </div>
              </div>
              <textarea 
                class="textarea is-large" 
                rows="10"
                placeholder="What's your solution?">
              </textarea>
            </div>
          </div>
          <div class="has-text-right">
            <a class="button is-primary is-large">Submit your response</a>
          </div>
        </div>
      </div>
    </section>
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
  background-image: linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/1670845/pexels-photo-1670845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>