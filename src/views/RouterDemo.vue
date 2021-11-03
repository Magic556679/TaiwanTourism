<template>
  <div>我是 products.vue</div>
  <router-link @click="go" to="">前往某路由範例</router-link>
  <router-view></router-view>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.push('/product/gotoproducts');
    },
  },
};
</script>
