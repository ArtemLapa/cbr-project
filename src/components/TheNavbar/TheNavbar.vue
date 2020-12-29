<template>
  <div class="header__navigation-wrapper">
    <nav class="header__navigation">
      <ul class="header__nav-list">
        <li class="header__nav-items">
          <a href="#home" class="header__nav-link">home</a>
        </li>
        <li class="header__nav-items">
          <a href="#products" class="header__nav-link">products</a>
        </li>
        <li class="header__nav-items">
          <a href="#faqs" class="header__nav-link">faqs</a>
        </li>
        <li class="header__nav-items">
          <a href="#contact-us" class="header__nav-link">contact us</a>
        </li>
      </ul>

      <div class="header__logo-wrapepr">
        <a href="/" class="header__logo">cbd</a>
      </div>

      <ul class="header__user-panel-wrapper">
        <li class="header__login-wrapper">
          <a class="header__login">login</a>
        </li>

        <li class="header__search-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="20" viewBox="0 0 20 20">
            <path id="Icon" class="header__search-icon" d="M1694.84,51.98l-4.86-4.86a8.506,8.506,0,1,0-.84.842l4.86,4.86a0.61,0.61,0,0,0,.42.177,0.574,0.574,0,0,0,.42-0.177A0.6,0.6,0,0,0,1694.84,51.98Zm-18.62-10.452a7.33,7.33,0,1,1,7.33,7.335A7.338,7.338,0,0,1,1676.22,41.528Z" transform="translate(-1675.03 -33)"/>
          </svg>
           <span class="header__search">search</span>
        </li>

        <li class="header__cart-wrapper">
          <span class="header__cart">cart (0)</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      // navItems: ['home', 'products', 'faqs', 'contact us']
    }
  }
}
</script>

<style lang="scss">
  $style: "header";
  .#{$style} {
    &__navigation-wrapper {
      border-bottom: 2px solid rgba(#abcbe2, 0.4);
    }
    &__navigation {
      @include flex(space-between, center, row);
      max-height: 79px;
      height: 100%;
      @include text($H60, 400, $white-10);
      text-transform: uppercase;
    }
    &__nav-list {
      @include flex(space-between, center);
      max-width: 389px;
      width: 100%;
    }
    &__nav-items {
      padding: 36px 0 26px;
      &:first-child {
        padding: 36px 0 26px 59px;
      }
    }
    &__nav-link {
      @include text($H60, 400, $white-10);
      letter-spacing: 0.96px;
    }
    &__logo {
      @include text($H300, 400, $white-10);
    }
    &__user-panel-wrapper {
      @include flex(space-between, center);
      max-width: 382px;
      flex-basis: 382px;
      height: 100%;
    }
    &__login-wrapper {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        height: 100%;
        background-color: rgba(#abcbe2, 0.4);
      }
    }
    &__search-icon {
      fill: $white-10;
    }
    &__search {
      display: inline-block;
      margin-left: 10px;
    }
    &__login {
      color: $white-10;
      padding: 0 34px 0 32px;
    }
    &__search-wrapper {
      border-left: 2px solid rgba(#abcbe2, 0.4);
      padding: 0 36px 0 31px;
    }
    &__cart-wrapper {
      border-left: 2px solid rgba(#abcbe2, 0.4);
    }
    &__cart {
      padding: 0 35px 0 32px;
    }
  }
</style>