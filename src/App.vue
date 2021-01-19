<template>
  <div class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <the-header />
    <the-about-us />
    <the-products />
    <the-questions />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheAboutUs from '@/components/TheAboutUs/TheAboutUs.vue';
import TheProducts from '@/components/TheProducts/TheProducts.vue';
import TheQuestions from '@/components/TheQuestions/TheQuestions.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheAboutUs,
    TheProducts,
    TheQuestions,
  },
}
</script>

<style lang="scss">
  .app {
    background-color: $white-20;
  }
</style>