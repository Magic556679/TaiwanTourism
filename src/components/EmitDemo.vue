<template>
  <div>
    <button type="button" @click="click">emid add</button>
    <!-- <button type="button" @click="$emit('emit-click')">emid add</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      emitText: '測試',
    };
  },
  methods: {
    click() {
      //  事件名稱,參數
      this.$emit('EmitClick', this.emitText);
      console.log(this);
    },
  },
};
</script>
