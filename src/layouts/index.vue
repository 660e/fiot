<template>
  <div class="fullscreen bg-dark">
    <canvas id="particles"></canvas>
    <div class="fullscreen absolute text-grey-1 flex">
      <div class="col q-px-lg q-py-md flex column">
        <div class="flex q-pb-md">
          <fui-double>
            <div class="flex items-center q-pa-sm">
              <q-img src="~assets/logo.svg" width="36px" />
              <div class="text-h5 q-pl-sm">Futuristic Internet of Things</div>
            </div>
          </fui-double>
          <fui-double class="col q-mx-xl">
            <div class="flex items-center q-px-sm">
              <div v-for="m in menu" :key="m" class="text-subtitle1 q-mx-md cursor-pointer menu">
                <span>{{ m.label }}</span>
              </div>
            </div>
          </fui-double>
          <fui-double>
            <div class="flex items-center q-px-sm">
              <q-icon class="cursor-pointer" name="notifications_none" size="24px" />
              <q-separator class="q-mx-sm q-my-md" color="grey-1" vertical />
              <div class="flex items-center cursor-pointer">
                <q-icon name="account_circle" size="24px" />
                <span class="q-pl-sm">660E</span>
              </div>
            </div>
          </fui-double>
        </div>
        <div class="col flex">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import Particles from 'particlesjs';

export default defineComponent({
  name: 'app-layouts',

  setup() {
    const menu = ref([
      { label: '首页', value: 'home' },
      { label: '配电照明系统', value: '/' },
      { label: '给排水系统', value: '/' },
      { label: '暖通空调系统', value: '/' },
      { label: '统计分析', value: '/' },
      { label: '告警管理', value: '/' },
      { label: '批量任务', value: '/' }
    ]);

    onMounted(() => {
      Particles.init({
        selector: '#particles',
        color: '#666666',
        connectParticles: true
      });
    });

    return { menu };
  }
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
