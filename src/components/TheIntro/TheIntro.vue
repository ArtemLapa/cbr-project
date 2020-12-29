<template>
  <div class="header__intro-wrapper">
    <div class="header__intro-content">
      <h1 class="header__intro-title">
        Enhancing Life 
        Excelling in Care
      </h1>
      <p class="header__intro-sub-title">
        Choose Wisely. Choose CBD.
      </p>
      <div class="header__intro-btn-wrapper">
        <a href="#" class="header__intro-shop-link">start shopping</a>
      </div>
      <a href="#" class="header__intro-all-products">See all products</a>
    </div>
    <div class="header__intro-quote">
      <p class="header__intro-quote-text">CBD Potion health</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheIntro',
}
</script>

<style lang="scss">
$style: "header";
  .#{$style} {
    &__intro-content {
      @include flex(center, flex-end, column);
      max-width: 632px;
      position: absolute;
      right: 20%;
      top: 50%;
      transform: translateY(-50%);
    }
    &__intro-title {
      @include text($H550, 400, $white-20);
      text-align: right;
      text-transform: uppercase;
      letter-spacing: 14px;
      margin-bottom: 39px;
    }
    &__intro-sub-title {
      @include text($H240, 300, $white-20);
      text-align: right;
      text-transform: capitalize;
      letter-spacing: 6px;
      max-width: 398px;
      margin-bottom: 56px;
    }
    &__intro-btn-wrapper {
      @include flex(center, center, column);
      width: 270px;
      height: 70px;
      position: relative;
      margin-bottom: 30px;
    }
    &__intro-shop-link {
      @include flex(center, center);
      border: 1px solid $green-50;
      width: 100%;
      height: 100%;

      @include text($H200, 400, $white-10);
      text-transform: uppercase;
      transition: background-color, color .2s ease;
      &:after {
        content: '';
        display: block;
        width: 45px;
        height: 2px;
        background-color: $white-20;
        margin-left: 18px;
      }
      &:hover {
        color: $green-50;
        &:after {
          background-color: $green-50;
        }
      }
    }
    &__intro-all-products {
      @include text($H80, 300, $white-10);
      letter-spacing: 5px;
    }
    &__intro-quote {
      position: absolute;
      bottom: 0;
    }
    &__intro-quote-text {
      @include text($H260, 400, $white-10);
      text-transform: uppercase;

      @include flex(flex-start, center);
      &:before {
        content: '';
        display: block;
        width: 107px;
        height: 2px;
        background-color: $white-20;
        margin-right: 31px;
      }
    }
  }
</style>