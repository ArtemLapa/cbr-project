<template>
  <div class="header">
    <the-navbar></the-navbar>
    <h1>Header</h1>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue';
export default {
  name: 'TheHeader',
  components: {
    TheNavbar
  },
}
</script>