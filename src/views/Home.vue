<template>
  <div class="home">
    <p>{{message}}</p>
    <Basic></Basic>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Basic from "@/components/basic/Basic.vue";

@Component({
  components: {
    Basic,
    HelloWorld
  },
})
export default class Home extends Vue {
  message: string = "!!@!!";
}
</script>
