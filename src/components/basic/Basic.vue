<template>
  <p>{{name}}</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Basic extends Vue {
  name: string = "나이";
}
</script>