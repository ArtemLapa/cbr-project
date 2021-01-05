<template>
  <div class="about-us">
    <div class="about-us__we-are">
      <h4 class="about-us__we-are-heading">
        We are what we are
      </h4>
      <div class="abou-us__offers-wrapper">
        <img src="../../assets/Logos.png" alt="offers" class="about-us__offers">
      </div>
    </div>
    <div class="container about-us__container">
      <the-tabs></the-tabs>
    </div>
  </div>
</template>

<script>
import TheTabs from '@/components/TheTabs/TheTabs.vue';
export default {
  name: 'TheAboutUs',
  components: {
    TheTabs,
  }
}
</script>

<style lang="scss">
  $style: "about-us";
    .#{$style} {
    padding-top: 100px;
    &__we-are {
      @include flex(center, center, column);
      padding: 50px 0 40px;
      margin: 0 auto 120px;
      max-width: 690px;
      max-height: 200px;
      background: no-repeat url("../../assets/holder.png");
    }
    &__we-are-heading {
      @include text($H240, 400, $black-90);
      text-align: center;
      letter-spacing: 4.8px;
      text-transform: uppercase;
    }
  }
</style>