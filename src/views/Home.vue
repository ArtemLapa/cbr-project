<template>
  <div class="home">
    <the-header></the-header>
    <the-about-us></the-about-us>
    <the-products></the-products>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheAboutUs from '@/components/TheAboutUs/TheAboutUs.vue';
import TheProducts from '@/components/TheProducts/TheProducts.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheAboutUs,
    TheProducts,
  }
}
</script>
