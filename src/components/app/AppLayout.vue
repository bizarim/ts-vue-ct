<template>
  <div>
    <app-header />
    <app-body />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/app/AppHeader.vue";
import AppBody from "@/components/app/AppBody.vue";
import AppFooter from "@/components/app/AppFooter.vue";

@Component({
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
})
export default class AppLayout extends Vue {}
</script>
<style scoped lang="scss">
</style>