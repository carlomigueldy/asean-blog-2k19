<template>
  <div>
    <section class="hero is-medium is-black" > 
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <BeTheChange />
          </h1>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-light"> 
      <div class="hero-body">
        <div class="container">
          <blockquote class="title has-text-centered">
            “We are the first generation to feel the sting of climate change, and we are the last generation that can do something about it.” – Jay Inslee
          </blockquote>
        </div>
      </div>
    </section>

    <section class="section" id="article1">
      <div class="container">
        <Card 
          header="https://images.pexels.com/photos/2505705/pexels-photo-2505705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Sustainable Actions"
          description="Here are 6 actions to help fight against climate change."
          :tags="['ClimateChange', 'Prevention']"
          route="one"
        />
      </div>
    </section>

    <section class="section" id="article2">
      <div class="container">
        <Card 
          header="https://images.pexels.com/photos/2787469/pexels-photo-2787469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Teaching Youth About Climate Change"
          description="Encouraging the youth to participate fighting against climate change."
          :tags="['Teach', 'Youth', 'NextGeneration']"
          route="two"
        />
      </div>
    </section>

    <section class="hero is-medium is-light" id="form"> 
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
            <b-button
              size="is-large"
              outlined>
              Submit your response
                <b-icon 
                icon="send-outline" 
                size="is-small">
                </b-icon>
            </b-button>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section" id="about">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="title">About</h1>
          <h2 class="subtitle">This is the about page</h2>
        </div>
        <div class="content has-text-centered">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur eveniet ex molestias quia quibusdam qui et, velit at facilis, tempora, nihil ad natus esse aspernatur perferendis amet aliquid. Ipsa ab optio fuga excepturi, neque reiciendis dignissimos et sed omnis perspiciatis accusamus vel sunt hic asperiores quos! Tenetur ratione itaque veniam corporis, exercitationem praesentium perferendis illo quae soluta nesciunt. Doloremque perspiciatis nam assumenda recusandae soluta earum qui quaerat cumque facere labore, adipisci voluptatum reiciendis est nemo, corporis aspernatur beatae repudiandae laborum nesciunt doloribus fugit. Ea maiores neque dolor, quaerat, iusto cumque excepturi impedit sint quas culpa pariatur vitae exercitationem reprehenderit?
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import Card from '../components/Card'
import BeTheChange from '../components/BeTheChange'

export default {
  name: 'home',
  components: {
    Card,
    BeTheChange,
  }
}
</script>

<style scoped>
.my-parallax {
  min-height: 100%;
  width: 100%;
  background-position: center; 
  background-attachment: fixed; 
  background-image: linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url('https://images.pexels.com/photos/1670845/pexels-photo-1670845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>