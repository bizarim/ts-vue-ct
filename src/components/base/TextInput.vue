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
      autocapitalize="off"
      spellcheck="true"
      :minlength="0"
      :maxlength="255"
      :value="value"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class TextInput extends Vue {
  private placeHolder: string = "here";
  private value: string = '';
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