<template>
  <div class="fullscreen bg-dark">
    <canvas id="particles"></canvas>
    <div class="fullscreen absolute text-white flex">
      <div class="col">
        <fui-double></fui-double>
      </div>
    </div>
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
