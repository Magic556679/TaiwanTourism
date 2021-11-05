<template>
  <div class="about">
    <h1>觀迎來到 台灣景點！</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <input type="text" placeholder="搜尋關鍵字" v-model="search" ref="test">
      </div>
    </div>
    <!-- select -->
    <div class="row">
      <div class="col-12 mt-5">
        <select name="全部地區" v-model="select">
          <option disabled>請選擇</option>
          <option v-for="item in city" :key="item.id" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <!-- 搜尋 render -->
    <div class="row mt-5">
        <div class="col-12 col-lg-3" v-for="item in textsearch" :key="item.id">
          <div class="card" style="width: 18rem;">
          <img :src="item.Picture.PictureUrl1" class="card-img-top"
          :alt="item.Picture.PictureDescription1">
          <div class="card-body">
            <h3 class="card-title"> {{ item.City }} </h3>
            <h5 class="card-title"> {{ item.Name }} </h5>
            <p class="card-text"> {{ item.DescriptionDetail }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <!-- select render -->
    <div class="row mt-5" v-if="this.search == undefined">
        <div class="col-12 col-lg-3" v-for="item in place" :key="item.id">
          <div class="card" style="width: 18rem;">
          <img :src="item.Picture.PictureUrl1" class="card-img-top"
          :alt="item.Picture.PictureDescription1">
          <div class="card-body">
            <h3 class="card-title"> {{ item.City }} </h3>
            <h5 class="card-title"> {{ item.Name }} </h5>
            <p class="card-text"> {{ item.DescriptionDetail }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsSHA from 'jssha';

export default {
  data() {
    return {
      place: [],
      search: '',
      select: '請選擇',
      city: ['全部', '臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '金門縣', '澎湖縣', '連江縣'],
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
      const keywordTxt = this.select;
      if (this.select === '請選擇') {
        // 前二十筆
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=20&$format=JSON';
        // 全部資料
        // const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$format=JSON';
        // const search = '臺北市';
        // const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${search}')&$top=30&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
        }).catch(() => {
          console.log('失敗');
        });
      } else if (this.select === '全部') {
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=40&$format=JSON';
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${keywordTxt}')&$top=100&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
          // 如果有圖片（Picture.PictureUrl1）的話就顯示
          // const num = this.place.filter((item) => item.Picture.PictureUrl1 !== undefined);
          // const num = this.place.filter((item) => item.Picture.PictureUrl1);
          // this.place = num;
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
  },
  computed: {
    textsearch() {
      return this.place.filter((item) => item.Name.match(this.search));
      // return this.place.filter((item) => {
      //   console.log(item);
      //   return item.Name.match(this.search);
      // });
    },
  },
  watch: {
    select(a, b) {
      this.verify();
      console.log(a, b);
    },
  },
  mounted() {
    this.verify();
    console.log(this.$refs.test.value === undefined);
  },
};
</script>
<style lang="scss" scoped>
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>
