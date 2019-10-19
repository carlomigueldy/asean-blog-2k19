<template>
    <b-navbar fixed-top class="is-black shadow">
        <template slot="brand">
            <b-navbar-item tag="router-link" to="/">
              {{ title }}
            </b-navbar-item>
        </template>
        <template slot="end">
            <!-- <b-navbar-item tag="router-link" to="/about">
              About
            </b-navbar-item> -->
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String
  }
}
</script>