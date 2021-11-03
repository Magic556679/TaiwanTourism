<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 如果元件名稱以駝峰方式命名 放到模板裡要改成小寫連字號 不然容易出問題  -->
    <div class="mt-3 mb-3">
      <vuex-demo></vuex-demo>
    </div>
    <div class="mt-3 mb-3">
      <props-demo :propsDemo="text" :text="innertext" :propsobj="obj">123123</props-demo>
    </div>
    <button class="mt-2" @click="add"> home.vue add </button>
    <div class="mt-2">
      <emit-demo @emit-click="add"></emit-demo>
    </div>
    <h3 class="mt-2"> Home.vue 主元件的 data：num {{ num }} </h3>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import VuexDemo from '@/components/VuexDemo.vue';
import PropsDemo from '@/components/PropsDemo.vue';
import EmitDemo from '@/components/EmitDemo.vue';

export default {
  name: 'Home',
  data() {
    return {
      text: '我是外部元件傳進來的',
      num: 0,
      innertext: '我是外部元件',
      obj: {
        name: '傳參考',
      },
    };
  },
  methods: {
    add(text) {
      this.num += 1;
      console.log(text);
    },
  },
  components: {
    HelloWorld,
    VuexDemo,
    PropsDemo,
    EmitDemo,
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
