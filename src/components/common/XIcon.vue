<template>
  <component :is="getIcon"></component>
</template>

<script>

const getName = (name) => `icon-${name}`;

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'rate-star'
    },
  },
  components: {
    [getName('rate-star')]: () => import('../icons/IconStar.vue'),
    [getName('arrow-next')]: () => import('../icons/IconArrowNext.vue'),
    [getName('arrow-prev')]: () => import('../icons/IconArrowPrev.vue'),
  },
  computed: {
    getIcon() {
      return getName(this.icon);
    },
  },
}
</script>