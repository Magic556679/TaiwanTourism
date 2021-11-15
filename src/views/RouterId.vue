<template>
  <div>撈取路由的 id</div>
</template>
<script>
export default {
  mounted() {
    // console.log(`路由屬性 ${this.$route}`);
    console.log(this.$route); //  路由屬性
    console.log(this.$route.params.id); // 讀取路由後面的 id
    console.log(this.$router); //  路由方法
    console.log('123');
  },
};
</script>
