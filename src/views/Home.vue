<template>
  <div class="home">
    <the-header></the-header>
    <the-about-us></the-about-us>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheAboutUs from '@/components/TheAboutUs/TheAboutUs.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheAboutUs,
  }
}
</script>
