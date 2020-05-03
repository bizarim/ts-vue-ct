<template>
  <div class="radio-label">
    <label>
      <input :id="id" type="radio" :checked="init" v-on:click="onChange" />
      <span class="radio-el">
        <span class="radio" />
      </span>

      <span class="radio-body">
        <p class="label-desc">{{text}}</p>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type onHandle = (id: number, checked: boolean, text: string) => void;

@Component({})
export default class Radio extends Vue {
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
.radio-label {
  margin: 0;
  cursor: pointer;

  label {
    display: table;
    width: 100%;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] {
    + span {
      span {
        cursor: pointer;
      }
    }
  }

  input[type="radio"] {
    + span {
      span {
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          border-color: white;
          background-color: white;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          content: "";
        }
      }
    }
  }

  input[type="radio"]:checked {
    + span {
      span {
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          border-color: #00c7ae;
          background-color: #00c7ae;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          content: "";
        }
      }
    }
  }

  .radio-el {
    position: relative;
    display: table-cell;
    width: 20px;
    padding-right: 15px;
    vertical-align: middle;

    .radio {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid #dedede;
      border-radius: 50%;
      margin: 0;
    }
  }

  .radio-body {
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