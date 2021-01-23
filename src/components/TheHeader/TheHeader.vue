<template>
  <div class="header">
    <the-navbar></the-navbar>
    <the-intro></the-intro>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue';
import TheIntro from '@/components/TheIntro/TheIntro.vue';
export default {
  name: 'TheHeader',
  components: {
    TheNavbar,
    TheIntro,
  },
}
</script>

<style lang="scss">
  $style: "header";
  .#{$style} {
    height: 100vh;
    background: url("../../assets/bg-intro.jpg") #496bfe no-repeat;
  }
</style>