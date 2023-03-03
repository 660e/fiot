<template>
  <div></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'app-index',

  setup() {
    onMounted(() => useRouter().push({ name: 'login' }));
  }
});
</script>
