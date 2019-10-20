<template>
<div>
    <Hero title="Teaching Youth About Climate Change" class="my-parallax"/>
    <section class="section">
        <div class="container">
            <div class="content">
                <b-button 
                tag="router-link"
                to="/"
                class="is-size-6">
                    <b-icon 
                    icon="arrow-left" 
                    size="is-small">
                    </b-icon>
                    Back
                </b-button>
            </div>
            <h1 class="title is-1">Teaching Youth About Climate Change</h1>
            <h2 class="subtitle is-4">Encouraging the youth to participate fighting against climate change.</h2>
            <div class="container">
                <section class="content">
                    Recently, news about animal extinctions, unusual weather, and a rise in the number of diseases has emerged.  It's been a cliche to hear that climate change is the cause of all these phenomena without even knowing specifically how climate change can affect the world. The recent news is indeed the harmful effects of climate change, and it could worsen if we don't do something about it. Mainly, it's up to us to stop this ongoing issue. But now, the question is "how?".
                </section>
                <center>
                    <img src="../../assets/youth.jpg" style="height: 75vh; width: 100%; padding-left: 3rem; padding-right: 3rem;">
                </center>
                <br>
                <section class="content">
                    Informing people about climate change through teaching especially the youth has to be the crucial part and yet a grueling task. It should be the first step to be taken to have our way of easing the effects of climate change. We should take note that teaching the youth is not limited at schools, it can be done anywhere at any moment. The youth must be introduced to their role - youth as the active participant and as the hope of our future to save our world from the harmful effects of climate change. Youth should know that we are the ones responsible for whatever is going on on our planet. Human activities like burning fossil fuels, cutting or even wiping the trees on our forest, burning our trashes, and even our very own carbon footprint here on earth are some of the causes of climate change, of the increase of greenhouse gases in the atmosphere. They are to know what could happen in every little thing they do. 
                </section>
                <section class="content">
                    Teaching the youth about climate change, encouraging and helping them to participate in preventing the worst-case scenario can be a great cause of climate change - the kind of climate change that brings all back to normal. It could be a gradual process but it is better than doing nothing.
                </section>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Hero from '../../components/Hero'

export default {
    name: 'two',
    components: {
        Hero,
    }
}
</script>

<style>
.my-parallax {
  min-height: 100%;
  width: 100%;
  background-position: center; 
  background-attachment: fixed; 
  background-image: linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/2787469/pexels-photo-2787469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>