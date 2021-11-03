<template>
  <div>
    {{ propsDemo }}
    {{ text }}
    <!-- 單向數據流概念錯誤示範-->
    <!-- <input type="text" v-model="text"> -->
    <!-- 單向數據流正確示範 -->
    <!-- <input type="text" v-model="newtext"> -->
    <!-- https://blog.csdn.net/weixin_46242909/article/details/114012729 -->
    <br>
    <!-- 從父元件傳入 obj -->
    {{ propsobj }} / {{ newobj }}
    <br>
    <input type="text" v-model="newobj">
    <!-- <input type="text" v-model="propsobj.name"> -->
  </div>
</template>
<script>
export default {
  props: ['propsDemo', 'text', 'propsobj'],
  data() {
    return {
      // newtext: '',
      newobj: '',
    };
  },
  created() {
    // 生命週期 data 資料準備完成
    // 重新指向創造新的記憶體空間
    // this.newtext = this.text;
    // 傳參考示範
    this.newobj = this.propsobj.name;
  },
  // mounted() {
  //   console.log(`mounted：${this.propsobj}`);
  // },
};
</script>
