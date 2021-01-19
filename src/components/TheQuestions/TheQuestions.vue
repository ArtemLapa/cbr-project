<template>
  <div class="questions">
    <h4 class="questions__heading">Frequently asked questions</h4>
    <div v-for="item in collapseText" :key="item.textId" class="questions__collapse-wrapper">
      <a-collapse accordion>
        <a-collapse-panel :key="item.textId" :header="item.textHeader" class="questions__collapse-item">
          <p class="questions__text">{{ item.text }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheQuestions',
  data() {
    return {
      collapseText: [
        {
          textId: 1,
          textHeader: 'What is Cannabidiol (CBD)?',
          text: 'Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. ',
        },
        {
          textId: 2,
          textHeader: 'Is Hemp-Derived Cannabidiol (CBD) Legal?',
          text: 'Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. ',
        },
        {
          textId: 3,
          textHeader: 'Are there any negative side effects?',
          text: 'Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. ',
        },
        {
          textId: 4,
          textHeader: 'Do you offer a return policy?',
          text: 'Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. ',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
  $style: "questions";
  .#{$style} {
    &__heading {
      @include text($H300, 400, $black-90);
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 45px;
    }
    &__collapse-wrapper {
      flex-basis: 570px;
      max-width: 570px;
      margin: auto;
    }
    &__text {
      @include text($H80, 300, $black-100);
    }
  }
  .ant-collapse {
    border: none;
  }
  .ant-collapse {
    background-color: transparent;
    .ant-collapse-item {
      border-top: 2px solid $white-30;
      border-bottom: none;
    }
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    @include text($H80, 300, $green-80);
    text-transform: capitalize;
    letter-spacing: 5.04px;
    padding: 30px 16px 27px 49px;
  }
  .ant-collapse-content {
    border-top: none;
    background-color: transparent;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 27px 0 47px 59px;
  }

</style>