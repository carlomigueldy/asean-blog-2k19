<template>
<div>
    <Hero title="Sustainable Actions" class="my-parallax"/>
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
            <h1 class="title is-1">Sustainable Actions</h1>
            <h2 class="subtitle is-4">Here are 6 actions to help fight against climate change.</h2>
        </div>
    </section>
            <section class="hero is-medium is-light"> 
                <div class="hero-body">
                    <div class="container">
                    <blockquote class="title has-text-centered">
                        “Tiny tweaks can lead to big changes.” – Amy Cuddy
                    </blockquote>
                    </div>
                </div>
            </section>
    <section class="section">
        <div class="container">
            <div class="content">
                <section class="section">
                    <div class="title">1. Reduce emissions</div>
                    <div class="content">Use your car less, whenever possible, instead use sustainable transportation, such as bicycling, or use public transportation more often. In the case of long-distance travel, trains are more sustainable than airplanes, which cause a great deal of the CO2 emitted into the atmosphere. If you're into cars, remember that every kilometer that you increase your speed will considerably increase CO2 emissions and expenses. According to the CE, each liter of fuel that your car uses, equals 2.5 kilos of CO2 emitted into the atmosphere.</div>
                </section>
                
                <section class="section">
                    <div class="title">2. Save energy</div>
                    <div class="content">
                        Take a look at the labels on your appliances, and never leave them on standby. Always adjust the thermostat for heating and air conditioning. By being careful how we use home appliances, we can save energy and, of course, money at the end of the month.
                    </div>
                </section>

                <section class="section">
                    <div class="title">3. Put the 3 R's of sustainability into practice</div>
                    <div class="content">
                        <ul>
                            <li><b>Reduce:</b> consume less, more efficiently</li>
                            <li><b>Reuse:</b> don't throw your water bottles directly into the trash, refill it with water instead. You'll be saving money and reducing your consumption.</li>
                            <li><b>Recycle:</b> packaging, waste from electronics, etc. Did you know that you can save over 730 kilos of CO2 each year just by recycling half of the garbage produced at home?</li>
                        </ul>
                    </div>
                </section>

                <section class="section">
                    <div class="title">4. What about your diet? Eat a low-carbon one</div>
                    <div class="content">
                        <ul>
                            <li><b>Reduce your meat consumption</b> (livestock is one of the biggest contaminators of the atmosphere) and increase your consumption of fruits and vegetables.</li>
                            <li><b>Eat food that is local and in season:</b> read the label and eat food that is produced in the area, avoid imports which create more emissions due to transportation. Also, eat seasonal items, to avoid less sustainable production methods.</li>
                            <li><b>Avoid excessive packaging and processed foods</b> as much as possible.</li>
                        </ul>
                    </div>
                </section>

                <section class="section">
                    <div class="title">5. Take action to save forests</div>
                    <div class="content">
                        <ul>
                            <li>Avoid anything that can cause fire.</li>
                            <li>If you want to purchase wood, find one that is certified or there is a seal showing its sustainable origin.</li>
                            <li>Plant a tree! Throughout its life, it can absorb up to a ton of CO2.</li>
                        </ul>
                    </div>
                </section>

                <section class="section">
                    <div class="title">6. Demand sustainable measures</div>
                    <div class="content">Demand that they take measures toward a more sustainable life, any way that you can: promote renewable energy, regulatory measures such as properly labelling products (fishing method used, labels that specify product origins, whether or not they are transgenic, etc.), promote more sustainable public transportation, promote the use of bicycles and other non-polluting transportation methods in the city, correctly manage waste through recycling/reuse, etc...</div>
                </section>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Hero from '../../components/Hero'

export default {
    name: 'one',
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
  background-image: linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/2505705/pexels-photo-2505705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>