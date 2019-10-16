<template>
<div>
    <Hero title="Lami na mga prutas" class="my-parallax"/>
    <section class="section">
        <div class="container">
            <h1 class="title">Lami na mga prutas</h1>
            <h2 class="subtitle">Lami lantawon, unsa nalang kaha pag kaon na.</h2>
            <div class="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, deserunt dicta? Consectetur aliquam nesciunt ducimus, magnam non quae nihil unde facere necessitatibus excepturi asperiores ad illo enim officia ullam itaque doloremque ex! Perferendis dicta aperiam accusamus at magnam quaerat quam nesciunt repellat incidunt sit, pariatur non culpa molestias. Quibusdam voluptas facilis sint veritatis quas alias explicabo rerum unde nemo in maiores repellendus voluptatibus quaerat, mollitia architecto a, doloribus ut molestiae. Similique explicabo laudantium tempore illum deleniti reiciendis optio dolor itaque! Sunt quasi labore asperiores aperiam illo, modi voluptates nisi odit laboriosam autem praesentium distinctio! Ratione quibusdam dolore consequatur accusantium, laboriosam minus in ipsa nesciunt! Est dolor sint rerum nulla nisi quis maxime consectetur vel amet illum quidem, autem necessitatibus magnam facere fugiat sapiente veritatis non? Sapiente quisquam, hic, delectus laborum tempora corporis asperiores illum iure sed sint ratione, magnam cumque cupiditate veritatis rem provident? Nobis quam facilis similique ducimus corrupti!
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
  background-image: linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>