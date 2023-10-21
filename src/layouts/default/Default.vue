<template>
  <v-app>
    <OuterFrame image-url="https://images.unsplash.com/photo-1529079875474-0a66a1f176d0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <InnerFrame>
        <slot></slot>
      </InnerFrame>
    </OuterFrame>
    

  
  </v-app>
</template>

<script lang="ts" setup>
  import OuterFrame from "../../components/OuterFrame.vue";
  import InnerFrame from "../../components/InnerFrame.vue";


</script>
