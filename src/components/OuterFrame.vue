<template>
  <NavigationBar/>
  <div class="fullscreen-image">
    <div :style="imageStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import NavigationBar from './NavigationBar.vue';
export default {
  components: {
    NavigationBar,
  },  


  props: {
    imageUrl: String,
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      };
    },
  },
};
</script>
<style scoped>
.fullscreen-image {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
