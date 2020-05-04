<template>
  <div>
    <input
      class="form-control"
      name="text-input"
      type="text"
      x-autocompletetype="off"
      :placeholder="placeHolder"
      autocomplete="new-password"
      autocorrect="off"
      autoapitalize="off"
      spellcheck="true"
      :minlength="0"
      :maxlength="255"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// 왜냐하면 v-model은 input이라는 이벤트로 받기 때문이다.
@Component({})
export default class TextInput extends Vue {
  @Prop({ default: "" }) private value!: string;
  private placeHolder: string = "here";

  data() {
    return {
      dValue: this.value,
    };
  }
}
</script>
<style scoped lang="scss">
.form-control {
  text-align: left;
  height: 48px;
  border: 1px solid var(--sub-2-border-color);
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 4px;
  box-shadow: none;

  &:focus {
    outline: 0;
  }
}
</style>