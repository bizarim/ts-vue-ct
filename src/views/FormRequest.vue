<template>
  <div>
    <p>ch</p>
    <checkbox :id="1" text="test" :onHandle="onHandle" />
    <radio :id="2" text="test" :onHandle="onHandle" />
    <text-input />
    <lifecycle />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Checkbox from "../components/base/Checkbox.vue";
import Radio from "../components/base/Radio.vue";
import TextInput from "../components/base/TextInput.vue";
import Lifecycle from "../components/test/Lifecycle.vue";

type onHandle = (id: number, checked: boolean, text: string) => void;

@Component({
  components: { Checkbox, Radio, TextInput, Lifecycle },
})
export default class FormRequest extends Vue {
  async created() {
    console.log("created-2-1");
    await this.fails3();
    console.log("created-2-2");
  }

  beforeCreate() {
    console.log("beforeCreate-1");
  }

  mounted() {
    console.log("mounted-3");
  }
  beforeUpdate() {
    console.log("breforeUpdate-?");
  }
  updated() {
    console.log("updated-?");
  }

  beforeDestory() {
    console.log("beforeDestory-?");
  }

  destory() {
    console.log("destory-?");
  }

  fails3() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("3333");
        resolve();
      }, 3000);
    });
  }

  private onHandle = (id: number, checked: boolean, text: string) => {
    console.log(id);
    console.log(checked);
    console.log(text);
  };
}
</script>
<style scoped lang="scss">
</style>