<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <the-header />
    <the-about-us></the-about-us>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheAboutUs from '@/components/TheAboutUs/TheAboutUs.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheAboutUs
  },
}
</script>

    TheAboutUs