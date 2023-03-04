<template>
  <div class="fui-double">
    <div class="fui-double__top"><b></b></div>
    <div class="fui-double__bottom"><b></b></div>
    <div class="fui-double__slot">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fui-double'
});
</script>

<style lang="scss" scoped>
.fui-double {
  position: relative;
  display: flex;
  .fui-double__top,
  .fui-double__bottom {
    width: 100%;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before,
    &::after {
      content: '';
      display: block;
      background-color: #fff;
      height: 3px;
      width: 5px;
    }
    b {
      background-color: $light-dimmed-background;
      height: 1px;
      animation: line 0.5s forwards;
    }
  }
  .fui-double__top {
    top: calc(50% - 1px);
    animation: top 0.5s forwards;
  }
  .fui-double__bottom {
    bottom: calc(50% - 1px);
    animation: bottom 0.5s forwards;
  }
  .fui-double__slot {
    flex: 1;
    opacity: 0;
    animation: slot 0.1s 0.5s 4 forwards;
    display: flex;
  }
}
@keyframes top {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  80% {
    top: calc(50% - 1px);
  }
  100% {
    top: 0;
  }
}
@keyframes bottom {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  80% {
    bottom: calc(50% - 1px);
  }
  100% {
    bottom: 0;
  }
}
@keyframes line {
  50% {
    flex: 0;
  }
  80% {
    flex: 1;
  }
  100% {
    flex: 1;
  }
}
@keyframes slot {
  100% {
    opacity: 1;
  }
}
</style>
