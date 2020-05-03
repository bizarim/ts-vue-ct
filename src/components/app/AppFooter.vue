<template>
  <div class="footer-container">
    <div class="footer-container-row">Footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class AppFooter extends Vue {}
</script>
<style scoped lang="scss">
.footer-container {
  border-top: 0.0625rem solid var(--main-border-color);
  padding: 1.3125rem 0 1.875rem;

  .footer-container-row {
    display: block;
    max-width: 60.625rem;
    padding: 0;
  }
}
</style>