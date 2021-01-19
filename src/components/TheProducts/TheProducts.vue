<template>
  <div class="products">
    <h4 class="products__title">cbd featured products</h4>
      <the-product-card />
  </div>
</template>

<script>
import TheProductCard from '@/components/TheProductCard/TheProductCard.vue'
export default {
  name: 'TheProducts',
  components: {
    TheProductCard
  },
}
</script>

<style lang="scss">
  $style: "products";
    .#{$style} {
      margin-bottom: 229px;
      &__title {
        @include text($H300, 400, $black-90);
        text-transform: uppercase;
        letter-spacing: 6px;
        text-align: center;
        margin-bottom: 80px;
      }
    }
</style>