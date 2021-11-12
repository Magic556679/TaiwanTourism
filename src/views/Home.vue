<template>
  <Navbar></Navbar>
  <header>
      <div class="container h-100 text-center">
        <div class="row h-100">
          <div class="col-12  d-flex justify-content-center align-items-center">
            <div>
              <h1>尋找臺灣</h1>
              <h2>景點、美食、活動</h2>
            </div>
          </div>
          <div class="col-12 mt-5">
            <div class="d-flex justify-content-center">
              <input type="text" placeholder="請輸入關鍵字" class="border-0 rounded-4 p-3">
              <button type="button" class="btn btn-taifun ms-2 rounded-4 px-4">
                <i class="fas fa-sliders-h text-white"></i>
                篩選
              </button>
            </div>
          </div>
          <div class="col-12 mt-5">
            <button type="text" class="btn btn-taifun rounded-4 px-5 py-2">搜尋</button>
          </div>
        </div>
      </div>
  </header>
  <main>123</main>
  <Footer></Footer>
  <router-view></router-view>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
  },
  components: {
    Navbar,
    Footer,
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
header {
  margin-top: -138px;
  padding: 12% 0 5% 0;
  background-image: url(../assets/images/banner01.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  input {
    width: 50%;
  }
}
</style>
