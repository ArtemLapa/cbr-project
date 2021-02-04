<template>
  <div class="testimonials">
    <ul class="testimonials__list">
      <div class="testimonials__promo">CBD every day</div>
      <a-carousel
        arrows
        :after-change="onChange"
        :autoplay="play"
        :speed="1000"
        :slidesToShow="toShow"
        :dots="false"
        class="classs" >
        <div slot="prevArrow" class="custom-slick-arrow-t testimonials__arrow-prev">
          <x-icon icon=arrow-prev />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow-t testimonials__arrow-next">
          <x-icon icon=arrow-next class="testimonials__next"/>
        </div>
        <li class="testimonials__item">
          <div class="testimonials__content-wrapper">
            <div class="testimonials__stars-wrapper">
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
            </div>
            <p class="testimonials__text">
              I have tried another product after using this one successfully, and I
              am Back for good! The flavour, the lightness of the oil and the health
              benefits I have gotten with this oil are amazing!
            </p>
            <p class="testimonials__author">Mark J.</p>
          </div>
        </li>

        <li class="testimonials__item">
          <div class="testimonials__content-wrapper">
            <div class="testimonials__stars-wrapper">
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
              <x-icon name=rate-star class="testimonials__rate" />
            </div>
            <p class="testimonials__text">
              I have tried another product after using this one successfully, and I
              am Back for good! The flavour, the lightness of the oil and the health
              benefits I have gotten with this oil are amazing!
            </p>
            <p class="testimonials__author">Mark J.</p>
          </div>
        </li>

      </a-carousel>
    </ul>
  </div>
</template>

<script>
import XIcon from '@/components/common/XIcon.vue';

export default {
  name: "TheTestimonials",
  components: {
    XIcon,
  },
  data() {
    return {
      play: false,
      toShow: 1,
    }
  },
  methods: {
    onChange(a, b, c) {
      a, b, c;
    },
  },
}
</script>

<style lang="scss" scoped>
  $style: "ant-carousel";
  .#{$style} {
    .slick-prev,
    .slick-next {
      width: 130px;
      height: 100px;
      margin-top: -100px;
      top: 100%;
      border: 1px solid $white-20;
      z-index: 1;
      svg {
        fill: $white-10;
      }
    }
    .slick-prev {
      left: 43.4%;
      // transform: translateX(-47%);
    }
    .slick-next {
      right: 43%;
      // transform: translateX(-39.9%);
    }
    .custom-slick-arrow-t {
      @include flex(center, center);
      display: flex !important;
    }
    .slick-dots-bottom {
      display: none !important;
    }
  }
</style>

<style lang="scss">
  $style: "testimonials";
  .#{$style} {
    margin-bottom: 175px;
    &__list {
      position: relative;
    }
    &__promo {
      @include text($H80, 300, $white-20);
      letter-spacing: 5px;
      text-transform: uppercase;
      position: absolute;
      bottom: 15%;
      left: -1%;
      transform: rotateZ(90deg);
      z-index: 1;
    }
    &__item {
      @include flex(center, center);
      display: flex !important;
      height: 800px;
      max-width: 100vw;
      position: relative;
      background-image: url("../../assets/testimonials-bg.jpg");
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba($brown-100, 0.6);
      }
    }
    &__image {
      object-fit: contain;
      max-width: 1900px;
      max-height: 800px;
    }
    &__content-wrapper {
      @include flex(center, center, column);
      max-width: 744px;
      flex-basis: 744px;
      z-index: 1;
    }
    &__stars-wrapper {
      margin-bottom: 40px;
    }
    &__rate {
      fill: $green-30;
      margin-right: 4px;
      &:last-child {
        margin-right: 0;
      }
    }
    &__text {
      @include text($H220, 300, $white-10);
      text-align: center;
      line-height: 1.82;
      letter-spacing: 4.4px;
      margin-bottom: 36px;
    }
    &__author {
      @include text($H240, 400, $white-10);
      text-transform: uppercase;
      letter-spacing: 4.8px;
      position: relative;
      &:before {
        content: "";
        height: 2px;
        width: 45px;
        background-color: $white-10;
        position: absolute;
        top: 50%;
        left: -60%;
        transform: translateX(60%);
        transform: translateY(-50%);
      }
    }
  }
</style>