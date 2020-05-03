<template>
  <div :id="id" class="checkbox-label">
    <label>
      <input type="checkbox" :checked="init" v-on:click="onChange" />
      <span class="checkbox-el">
        <span />
      </span>

      <span class="checkbox-body">
        <p class="label-desc">{{text}}</p>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type onHandle = (id: number, checked: boolean, text: string) => void;

@Component({})
export default class Checkbox extends Vue {
  @Prop({ default: "" }) private text!: string;
  @Prop({ default: 0 }) private id!: number;
  @Prop({ default: false }) private init!: boolean;
  @Prop({
    default: (id: number, checked: boolean, text: string): void => undefined,
  })
  private onHandle?: onHandle;

  private onChange(): void {
    if (this.onHandle) {
      this.onHandle(this.id, false, this.text);
    }
  }
}
</script>
<style scoped lang="scss">
.checkbox-label {
  margin: 0;

  label {
    display: table;
    width: 100%;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] {
    + span {
      cursor: pointer;
    }
  }

  input[type="checkbox"] {
    + span {
      span {
        &::before {
          content: "";
          position: relative;
          display: block;
          width: 20px;
          height: 20px;
          border: 1px solid var(--sub-1-border-color);
          border-radius: 4px;
          margin: 0;
        }
      }
    }
  }

  input[type="checkbox"]:checked {
    + span {
      span {
        &::before {
          content: "\2713";
          font-size: 1rem;
          color: var(--sub-bg-color);
          background: var(--main-bg-color);
          text-align: center;
        }
      }
    }
  }

  .checkbox-el {
    position: relative;
    display: table-cell;
    width: 20px;
    padding-right: 20px;
    vertical-align: middle;
  }

  .checkbox-body {
    cursor: pointer;
    position: relative;
    display: table-cell;
    vertical-align: middle;

    .label-desc {
      margin: 0px;
    }
  }
}
</style>