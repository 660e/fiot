<template>
  <div class="fullscreen bg-dark flex flex-center">
    <h1 class="text-white">login</h1>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'app-login',

  setup() {
    onMounted(() => useRouter().push({ name: 'home' }));
  }
});
</script>
