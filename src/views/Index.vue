<template>
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
            <input type="text" placeholder="請輸入關鍵字" class="border-0 rounded-4 p-3" />
            <button type="button" class="btn btn-taifun ms-2 rounded-4 px-4" @click="open">
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
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3" v-for="item in place" :key="item.id">
          <div class="card mt-5" >
            <img
              :src="item.Picture.PictureUrl1"
              class="card-img-top"
              :alt="item.Picture.PictureDescription1"
            />
            <div class="card-body">
              <h3 class="card-title">{{ item.City }}</h3>
              <h5 class="card-title">{{ item.Name }}</h5>
              <!-- <p class="card-text">{{ item.DescriptionDetail }}</p> -->
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <open-model ref="searchOpen"
  :sort="sort"
  :east="east"
  :west="west"
  :south="south"
  :north="north"
  @set-search="getSeatch">
  </open-model>
</template>
<script>
import jsSHA from 'jssha';
import OpenModel from '@/components/OpenModel.vue';

export default {
  name: 'Index',
  components: {
    OpenModel,
  },
  data() {
    return {
      sort: ['熱門景點', '熱門美食', '熱門住宿'], // 分類
      place: [],
      demoplace: [],
      placelenth: 0, //  place陣列長度
      pages: 0, //  當前頁碼
      search: '',
      select: '請選擇',
      city: ['全部', '臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '金門縣', '澎湖縣', '連江縣'],
      citydemo: ['全部', '臺北市', '新北市', '臺中市', '臺南市', '高雄市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '連江縣'],
      east: ['宜蘭縣', '花蓮縣', '臺東縣'],
      west: ['臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市'],
      south: ['臺南市', '高雄市', '屏東縣'],
      north: ['臺北市', '新北市', '桃園市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣'],
    };
  },
  methods: {
    getAuthorizationHeader() {
      const AppID = '5b92a1059adc479db7aac18c4913150a';
      const AppKey = 'IZj0rm4jFCuk7Yl_DrfEZrs48Lw';
      const GMTString = new Date().toGMTString();
      const ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update(`x-date: ${GMTString}`);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = `hmac username=\"${AppID}\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"${HMAC}\"`;
      return { 'Authorization': Authorization, 'X-Date': GMTString };
    },
    verify() {
      // const keywordTxt = this.select;
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${10}&$format=JSON`;
      this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
        this.place = res.data;
        const num = this.place.filter((item) => item.Picture.PictureUrl1);
        this.place = num;
      }).catch(() => {
        console.log('失敗');
      });
    },
    open() {
      this.$refs.searchOpen.openModel();
    },
    getSeatch(a, b, c) {
      console.log(a, b, c);
    },
  },
  mounted() {
    this.verify();
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
main {
  img {
    height: 250px;
    object-fit: cover;
  }
}
</style>
