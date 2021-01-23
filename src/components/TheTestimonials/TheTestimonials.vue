<template>
  <div class="testimonials">
    <ul class="testimonials__list">
      <a-carousel
        arrows
        :after-change="onChange"
        :autoplay="play"
        :speed="1000"
        :slidesToShow="toShow" >
        <div slot="prevArrow" class="custom-slick-arrow-t"
             style="left: 10px;zIndex: 1">
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow-t" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <li class="testimonials__item">
          <div class="testimonials__content-wrapper">
            <div class="testimonials__stars-wrapper">
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
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
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
              <icon-star class="testimonials__rate"/>
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
import IconStar from '@/components/icons/IconStar.vue';

export default {
  name: "TheTestimonials",
  components: {
    IconStar,
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
  }
}
</script>

<style lang="scss">
  $style: "testimonials";
  .#{$style} {
    &__item {
      @include flex(center, center);
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