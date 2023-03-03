<template>
  <div class="fullscreen bg-dark">
    <canvas id="particles"></canvas>
    <div class="fullscreen absolute flex flex-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum.</div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import Particles from 'particlesjs';

export default defineComponent({
  name: 'app-layouts',

  setup() {
    onMounted(() => {
      Particles.init({
        selector: '#particles',
        color: '#666666',
        connectParticles: true
      });
    });
  }
});
</script>
