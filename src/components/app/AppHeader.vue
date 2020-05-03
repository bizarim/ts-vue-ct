<template>
  <div class="app-header">
    <img src="../../assets/logo.svg" alt="logo" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class AppHeader extends Vue {}
</script>
<style scoped lang="scss">
.app-header {
  margin: 0;
  height: 72px;
  border-bottom: 1px solid var(--main-border-color);
  background-color: var(--sub-bg-color);
  padding: 1rem 1.5rem;

  img {
    height: 36px;
  }
}
</style>