<template>
  <div id="app-body">
    <p>body</p>
    <router-view :key="key" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBody extends Vue {
  get key() {
    return this.$route.path;
  }
}
</script>
<style scoped lang="scss">
#app-body {
  position: relative;
}
</style>