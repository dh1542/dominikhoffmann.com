<template>
  <div class="fullscreen-image">
    <div :style="imageStyle">
      <InnerFrame />
    </div>
  </div>
</template>

<script lang="ts">
import InnerFrame from "./InnerFrame.vue";
export default {
  components: {
    InnerFrame
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
