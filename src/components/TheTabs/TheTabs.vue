<template>
  <div class="about-us__tabs-wrapper">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="What is cbd?">
        <div class="about-us__tabs-content">
          <div class="about-us__tabs-content-text">
            <h4 class="about-us__tabs-heading">
              what it is and how it works
            </h4>
            <p class="about-us__tabs-text">
              CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.
            </p>
            <p class="about-us__tabs-text">
              Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.
            </p>
            <p class="about-us__tabs-text">
              Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.
            </p>
          </div>
          <div class="about-us__tabs-content-img">
            <div class="about-us__img-wrapper">
              <img src="../../assets/tab-img-1.jpg" alt="image" class="about-us__img">
            </div>
            <div class="about-us__img-wrapper">
              <img src="../../assets/tab-img-2.jpg" alt="image" class="about-us__img">
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="benefits" force-render>
        <div class="about-us__tabs-content">
          <div class="about-us__tabs-content-text">
            <h4 class="about-us__tabs-heading">
              benefits
            </h4>
            <p class="about-us__tabs-text">
              CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.
            </p>
            <p class="about-us__tabs-text">
              Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.
            </p>
            <p class="about-us__tabs-text">
              Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.
            </p>
          </div>
          <div class="about-us__tabs-content-img">
            <div class="about-us__img-wrapper">
              <img src="https://picsum.photos/id/240/570/300" alt="image" class="about-us__img">
            </div>
            <div class="about-us__img-wrapper">
              <img src="https://picsum.photos/id/241/570/300" alt="image" class="about-us__img">
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="our difference">
        <div class="about-us__tabs-content">
          <div class="about-us__tabs-content-text">
            <h4 class="about-us__tabs-heading">
              our difference
            </h4>
            <p class="about-us__tabs-text">
              CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.
            </p>
            <p class="about-us__tabs-text">
              Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.
            </p>
            <p class="about-us__tabs-text">
              Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.
            </p>
          </div>
          <div class="about-us__tabs-content-img">
            <div class="about-us__img-wrapper">
              <img src="https://picsum.photos/id/242/570/300" alt="image" class="about-us__img">
            </div>
            <div class="about-us__img-wrapper">
              <img src="https://picsum.photos/id/243/570/300" alt="image" class="about-us__img">
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'TheTabs',
    data() {
    return {};
  },
  methods: {
    callback(key) {
      key;
    },
  },
}
</script>

<style lang="scss">
  .ant-tabs-nav {
    @include text($H300, 400, $black-90);
    text-transform: uppercase;
  }
  .ant-tabs-nav .ant-tabs-tab {
    padding: 0 0 20px;
    margin: 0 98px 0 0;
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: $green-30;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    @include text($H300, 400, $black-90);
    // text-transform: uppercase;
  }
  .ant-tabs-ink-bar {
    background-color: $black-90;
  }
  .ant-tabs-bar {
    border-bottom: 2px solid $green-10;
    flex-basis: 80%;
    max-width: 80%;
    margin: 0 0 80px 0;
  }
  $style: "about-us";
    .#{$style} {
      &__tabs-wrapper {
        margin-bottom: 150px;
      }
      &__tabs-content {
        @include flex(space-between, center);
      }
      &__tabs-content-text {
        max-width: 408px;
      }
      &__tabs-heading {
        @include text($H240, 400, $black-100);
        letter-spacing: 4.8px;
        text-transform: uppercase;
        margin-bottom: 50px;
      }
      &__tabs-text {
        @include text($H80, 300, $green-80);
        margin-bottom: 62px;
        line-height: 40px;
        letter-spacing: 0.72px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__img-wrapper {
        margin-bottom: 30px;
        max-width: 570px;
        max-height: 300px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
</style>