<template>
  <div class="fullscreen bg-dark">
    <canvas id="particles"></canvas>
    <div class="fullscreen absolute text-white flex">
      <div class="col q-px-lg q-py-md">
        <div class="flex">
          <fui-double class="text-h5 text-center q-py-sm">FIOT</fui-double>
          <fui-double class="col text-h5 text-center q-py-sm q-mx-xl">MENU</fui-double>
          <fui-double class="text-h5 text-center q-py-sm">INFO</fui-double>
        </div>
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
