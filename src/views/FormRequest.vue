<template>
  <div>
    <p>ch</p>
    <checkbox :id="1" text="test" :onHandle="onHandle" />
    <radio :id="2" text="test" :onHandle="onHandle" />
    <text-input v-model="name" /> {{name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Checkbox from "../components/base/Checkbox.vue";
import Radio from "../components/base/Radio.vue";
import TextInput from "../components/base/TextInput.vue";

type onHandle = (id: number, checked: boolean, text: string) => void;

@Component({
  components: { Checkbox, Radio, TextInput },
})
export default class FormRequest extends Vue {
  async created() {}
  data() {
    return { name: "" };
  }

  mounted() {}

  private onHandle = (id: number, checked: boolean, text: string) => {
    console.log(id);
    console.log(checked);
    console.log(text);
  };
}
</script>
<style scoped lang="scss">
</style>