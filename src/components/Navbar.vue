<template>
    <b-navbar fixed-top class="is-primary">
        <template slot="brand">
            <b-navbar-item>
              {{ title }}
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
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
