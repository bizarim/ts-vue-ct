<template>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({

})
export default class Lifecycle extends Vue {
  async created() {
    console.log("Lifecycle-created-2-1");
    await this.interval();
    console.log("Lifecycle-created-2-2");
  }

  beforeCreate() {
    console.log("Lifecycle-beforeCreate-1");
  }

  mounted() {
    console.log("Lifecycle-mounted-3");
  }
  beforeUpdate() {
    console.log("Lifecycle-breforeUpdate-?");
  }
  updated() {
    console.log("Lifecycle-updated-?");
  }

  beforeDestory() {
      console.log("Lifecycle-beforeDestory-?");
  }

  destory() {
      console.log("Lifecycle-destory-?");
  }

  interval() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Lifecycle-3333');
            resolve();
        }, 3000);
    });
}

}
</script>
<style scoped lang="scss">
</style>