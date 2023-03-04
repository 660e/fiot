<template>
  <div class="fullscreen bg-dark">
    <canvas id="particles"></canvas>
    <div class="fullscreen absolute text-white flex">
      <div class="col q-px-lg q-py-md">
        <div class="flex">
          <fui-double>
            <div class="flex items-center q-pa-sm">
              <q-img src="~assets/logo.svg" width="36px" />
              <div class="text-h5 q-pl-sm">FIOT</div>
            </div>
          </fui-double>
          <fui-double class="col q-mx-xl">MENU</fui-double>
          <fui-double>
            <div class="flex items-center q-px-sm">
              <q-icon class="cursor-pointer" name="notifications_none" size="24px" />
              <q-separator class="q-mx-sm q-my-md" color="white" vertical />
              <div class="flex items-center cursor-pointer">
                <q-icon name="account_circle" size="24px" />
                <span class="q-pl-sm">660E</span>
              </div>
            </div>
          </fui-double>
        </div>
        <div></div>
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
