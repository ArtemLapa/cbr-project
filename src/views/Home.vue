<template>
  <div class="home">
    <the-header />
    <the-about-us />
    <the-products />
    <the-questions />
    <the-testimonials />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheAboutUs from '@/components/TheAboutUs/TheAboutUs.vue';
import TheProducts from '@/components/TheProducts/TheProducts.vue';
import TheQuestions from '@/components/TheQuestions/TheQuestions.vue';
import TheTestimonials from "@/components/TheTestimonials/TheTestimonials";

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheAboutUs,
    TheProducts,
    TheQuestions,
    TheTestimonials,
  }
}
</script>
