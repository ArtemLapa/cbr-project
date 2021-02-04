<template>
  <footer class="footer">
    <h4 class="footer__heading">CBD</h4>
    <div class="container">
      <nav class="footer__nav-footer">
        <ul class="footer__left-list">
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Privacy Policy</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Terms of Use</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Return Policy</a>
          </li>
        </ul>

        <div class="footer__media-list-wrapper">
          <ul class="footer__media-list">
            <li class="footer__media-item">
              <a href="https://facebook.com" class="footer__media-link" target="_blank">
                <x-icon icon=facebook />
              </a>
            </li>
            <li class="footer__media-item">
              <a href="https://tweeter.com" class="footer__media-link">
                <x-icon icon=tweetter />
              </a>
            </li>
            <li class="footer__media-item">
              <a href="https://youtube.com" class="footer__media-link">
                <x-icon icon=youtube />
              </a>
            </li>
          </ul>
          <div class="footer__stick"></div>
        </div>

        <ul class="footer__right-list">
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">SHIPPING INFO</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">RETURNS / EXCHANGES</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">CONTACT</a>
          </li>
        </ul>
      </nav>

      <div class="footer__subscribe">
        <h5 class="footer__heading-subscribe">Subscribe to Newsletter</h5>
        <form class="footer__form">
          <input type="email" name="email" id="email" placeholder="Email" class="footer__input">
          <button type="submit" class="footer__submit-btn">
            <x-icon icon=arrow-next class="testimonials__next"/>
          </button>
        </form>
      </div>
      <div class="footer__copyright">
        © 2018. CbD health.
      </div>
    </div>
  </footer>
</template>

<script>

import XIcon from "@/components/common/XIcon.vue";

export default {
  name: "TheFooter",
  components: {
    XIcon,
  }
}
</script>

<style lang="scss">
  $style: "footer";
  .#{$style} {
    &__heading {
      @include text($H600, 400, $green-80);
      text-align: center;
      margin-bottom: 75px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        display: block;
        height: 2px;
        width: 371px;
        background-color: $green-80;
        top: 50%;
        left: 25%;
        transform: translate(-25%, -50%);
      }
      &:after {
        content: "";
        position: absolute;
        display: block;
        height: 2px;
        width: 371px;
        background-color: $green-80;
        top: 50%;
        right: 17%;
        transform: translate(-17%, -50%);
      }
    }
    &__nav-footer {
      @include flex(space-between, flex-start);
      text-align: center;
      margin-bottom: 40px;
    }
    &__left-list {
      flex-basis: 30%;
    }
    &__right-list {
      flex-basis: 30%;
    }
    &__nav-item {
      margin-bottom: 25px;
      &:nth-child(3n) {
        margin-bottom: 0px;
      }
    }
    &__nav-link {
      @include text($H40, 300, $green-80);
      letter-spacing: 3.92px;
      text-transform: uppercase;
    }
    &__media-list-wrapper {
      @include flex(space-between, center, column);
      height: 120px;
      flex-basis: 30%;
    }
    &__media-list {
      @include flex(center);
    }
    &__media-item {
      margin-right: 60px;
      &:last-child {
        margin-right: 0px;
      }
    }
    &__stick {
      background-color: $green-80;
      width: 2px;
      height: 55px;
    }
    &__subscribe {
      text-align: center;
    }
    &__heading-subscribe {
      @include text($H80, 400, $black-90);
      letter-spacing: 2.7px;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    &__form {
      max-width: 370px;
      margin: 0 auto;
      position: relative;
      margin-bottom: 61px;
    }
    &__input {
      border: 2px solid $green-10;
      width: 370px;
      height: 60px;
      background-color: transparent;
      padding: 22px 88px 20px 31px;
    }
    &__submit-btn {
      position: absolute;
      right: 0;
      height: 100%;
      width: 86px;
      border: none;
      background: transparent;
      outline: none;
      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        height: 84%;
        top: 5px;
        bottom: 0;
        border-left: 2px solid #ced6af;
      }
      svg {
        fill: $green-80;
      }
    }
    &__copyright {
      @include text($H10, 300, $green-80);
      letter-spacing: 3.08px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 40px;
    }
  }
</style>