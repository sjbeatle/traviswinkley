<template>
  <div id="view-home" class="home">
    <Heading />
    <Welcome />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Heading from '@/components/Heading.vue';
import Welcome from '@/components/Welcome.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Heading,
    Welcome,
    Footer
  }
})
export default class Home extends Vue {}
</script>
