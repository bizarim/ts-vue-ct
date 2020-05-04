<template>
  <div :class="[ this.value === '' ? 'base-selectbox no-value' : 'base-selectbox']">
    <div class="select-wrapper">
      <select class="form-control" value="{value}" onchange="{this.handleChange}">
        <option disabled value="">{{disabledMsg}}</option>
        <option v-for="(option, index) in option" v-bind:key="index">{{option.text}}</option>
      </select>
      <i class="fa arrow"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type onHandle = (id: number, checked: boolean, text: string) => void;

@Component({ data: {} })
export default class Selectbox extends Vue {
  @Prop({ default: "Please select one!" }) private disabledMsg!: string;
  @Prop({ default: 0 }) private id!: number;
  @Prop({ default: false }) private value!: boolean;
  @Prop({
    default: (id: number, checked: boolean, text: string): void => undefined,
  })
  private onHandle?: onHandle;

  private onChange(): void {

  }
}
</script>
<style scoped lang="scss">
.form-group {
  border: none;
  text-align: left;
  padding: 0;

  .base-selectbox {
    display: block;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    .select-wrapper {
      min-width: 100px;
      width: 100%;
      position: relative;
      display: inline-block;
      border: 1px solid var(--sub-1-border-color);
      border-radius: 0;
      text-align: left;

      .form-control {
        border: none;
        box-shadow: none;
        background-color: transparent;

        option {
          color: var(--black);
          &:disabled {
            color: var(--main-border-color);
          }
        }
      }

      .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .arrow {
        position: absolute;
        top: 50%;
        right: 8px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #b5b5b5;
        pointer-events: none;
        font-size: 1rem;
      }
    }
  }
}

.no-value {
  .select-wrapper {
    select {
      color: var(--sub-1-border-color);
    }
  }
}
</style>