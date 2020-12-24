<template>
  <div class="header__navigation">
    <h2>navigation</h2>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss">
  h2 {
    @include text($H360, 400, $hover-btn);
    font-family: $josefin;
    background-color: $dark-grey;
  }
</style>