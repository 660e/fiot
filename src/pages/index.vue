<template>
  <div class="fullscreen bg-dark flex flex-center">
    <q-linear-progress :value="progress" color="white" style="width: 50%" rounded />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { SessionStorage } from 'quasar';

export default defineComponent({
  name: 'app-index',

  setup() {
    const progress = ref(0.5);

    onMounted(() => {
      if (SessionStorage.has('token')) {
        console.log(1);
      } else {
        useRouter().push('/home');
      }
    });

    return {
      progress
    };
  }
});
</script>
