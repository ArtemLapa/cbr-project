<template>
  <div class="products__carusel-wrapper">
    <ul class="products__products-list">
      <a-carousel arrows
        :after-change="onChange"
        :dots="false"
        :dot-position="dotPosition"
        :autoplay="play"
        :speed="1000"
        :slidesToShow="toShow" >
        <li v-for="item in cardInfo" :key="item.cardId" class="products__item">
          <div class="products__card-wrapper">
            <div class="products__card-image-wrapper">
              <div class="products__card-stars">
                <x-icon icon=rate-star class="products__rate-icon" />
                <x-icon icon=rate-star class="products__rate-icon" />
                <x-icon icon=rate-star class="products__rate-icon" />
                <x-icon icon=rate-star class="products__rate-icon" />
                <x-icon icon=rate-star class="products__rate-icon" />
              </div>
              <h5 class="products__card-title">{{ item.cardTitle }}</h5>
              <img :src="require(`@/assets/${item.cardImage}.png`)" alt="product" class="products__product-image">
            </div>
            <div class="products__price-wrapper">
              <span class="products__price">{{ item.cardPrice }}</span>
              <a href="#" class="products__to-shop-link">shop</a>
            </div>
          </div>
        </li>
        <div slot="prevArrow" class="products__arrow products__arrow--prev" style="zIndex: 1" >
          <x-icon icon=arrow-prev />
        </div>
        <div slot="nextArrow" class="products__arrow products__arrow--next">
          <x-icon icon=arrow-next />
        </div>
      </a-carousel>
    </ul>
  </div>
</template>



<script>
import XIcon from '@/components/common/XIcon.vue';

export default {
  name: 'TheProductCard',
  components: {
    XIcon,
  },
  data() {
    return {
      dotPosition: 'bottom',
      play: true,
      toShow: 3,
      cardInfo: [
        {
          cardId: 1,
          cardTitle: 'cbd 500 mg orange flavor tincture',
          cardImage: 'orange-flavor',
          cardPrice: '$49.99 usd',
        },
        {
          cardId: 2,
          cardTitle: 'Black ICE CBD Muscle Rub 200 mg',
          cardImage: 'black-ice',
          cardPrice: '$49.99 usd',
        },
        {
          cardId: 3,
          cardTitle: 'CBD+Curcumin Coffee 750 mg',
          cardImage: 'coffee',
          cardPrice: '$79.99 usd',
        },
        {
          cardId: 4,
          cardTitle: 'Black ICE CBD Muscle Rub 200 mg',
          cardImage: 'black-ice',
          cardPrice: '$49.99 usd',
        },
      ],
    }
  },
  methods: {
    onChange(a, b, c) {
      a, b, c;
    },
  }
}
</script>

<style lang="scss" scoped>
  $carousel: "ant-carousel";
  .#{$carousel} {
    width: 100%;
    .slick-prev,
    .slick-next {
      top: 100%;
      margin-top: 0;
      bottom: -80px;
      svg {
        fill: #6e774a;
        width: 40px;
        height: 20px;
      }
    }
    .slick-prev {
      left: 47%;
      transform: translateX(-47%);
      margin-top: 60px;
      width: 40px;
    }
    .slick-next {
      right: 47%;
      transform: translateX(-47%);
      margin-top: 58px;
      width: 40px;
    }
  }
  .ant-carousel >>> .slick-slide {
    text-align: center;
  }
  .slick-slide {
    flex-basis: 613px;
    max-width: 613px;
  }
</style>

<style lang="scss">
  $style: "products";
    .#{$style} {
      &__products-list {
        @include flex(space-between, stretch);
      }
      &__item {
        flex-basis: 613px;
        max-width: 613px;
      }
      &__card-image-wrapper {
        @include flex(center, center, column);
        border: 1px solid $green-10;
        background-color: $white-10;
        padding: 39px 0 42px;
        min-height: 455px;
      }
      &__card-stars {
        margin-bottom: 20px;
      }
      &__rate-icon {
        fill: $green-80;
        margin-right: 4px;
        &:last-child {
          margin-right: 0;
        }
      }
      &__card-title {
        @include text($H80, 400, $black-90);
        text-transform: uppercase;
        letter-spacing: 2.7px;
        margin-bottom: 41px;
      }
      &__price-wrapper {
        @include flex(space-between, center);
        background-color: $grey-10;
        text-transform: uppercase;
        height: 75px;
      }
      &__price {
        @include text($H80, 400, $black-90);
        display: block;
        margin-left: 30px;
      }
      &__to-shop-link {
        @include flex(center, center);
        @include text($H200, 400, $white-10);
        width: 188px;
        height: 100%;
        background-color: $green-80;
        &:after {
          content: '';
          display: block;
          width: 45px;
          height: 2px;
          background-color: $white-20;
          margin-left: 20px;
        }
      }
      &__arrow {
        background-color: black;
      }
    }
</style>