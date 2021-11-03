<template>
  <div>
    {{ greeting }}
  </div>
</template>
<script>
export default {
  name: 'VuexDemo',
  computed: {
    greeting() {
      return this.$store.state.greeting;
    },
  },
};
</script>
