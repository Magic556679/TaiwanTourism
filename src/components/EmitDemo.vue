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
      this.$emit('EmitClick');
      console.log('內');
    },
  },
};
</script>
