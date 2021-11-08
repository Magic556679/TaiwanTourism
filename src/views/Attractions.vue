<template>
  <div class="about">
    <h1>台灣各大景點</h1>
  </div>
  <div class="container">
    <!-- TextSearch -->
    <div class="row">
      <div class="col-12">
        <input type="text" placeholder="搜尋關鍵字" v-model="search" ref="demo">
      </div>
    </div>
    <!-- Select -->
    <div class="row">
      <div class="col-12 mt-5">
        <select name="全部地區" v-model="select">
          <option disabled>請選擇</option>
          <option v-for="item in citydemo" :key="item.id" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <!-- TextSearch render -->
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
    <!-- test getpage render -->
    <div class="row mt-5" v-if="this.search == undefined">
        <div class="col-12 col-lg-3" v-for="item in demoplace" :key="item.id">
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
    <!-- pagination -->
    <div class="d-flex justify-content-center">
      <pagination :pages="pages" @setpages="getPagesRender"/>
    </div>
    <!-- select render -->
    <!-- <div class="row mt-5" v-if="this.search == undefined">
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
    </div> -->
  </div>
</template>
<script>
import jsSHA from 'jssha';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      place: [],
      demoplace: [],
      placelenth: 0, //  place陣列長度
      pages: 0, //  當前頁碼
      search: '',
      text: '測試',
      select: '請選擇',
      city: ['全部', '臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '金門縣', '澎湖縣', '連江縣'],
      citydemo: ['全部', '臺北市', '新北市', '臺中市', '臺南市', '高雄市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '連江縣'],
    };
  },
  components: {
    Pagination,
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
        // 全部資料
        // const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$format=JSON`;
        // 篩選 如果有圖片的話 $filter=Picture%2FPictureUrl1%20ne%20null&
        // Pagination https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${10}&$skip=${3}&$format=JSON
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${30}&$skip=${0}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
          this.pagination();
        }).catch(() => {
          console.log('失敗');
        });
      } else if (this.select === '全部') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${100}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
          const num = this.place.filter((item) => item.Picture.PictureUrl1);
          this.place = num;
          console.log(this.place);
          this.pagination();
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${keywordTxt}')&$top=${100}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
          // if item.Picture.PictureUrl1 == true return
          const num = this.place.filter((item) => item.Picture.PictureUrl1);
          this.place = num;
          this.pagination();
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
    pagination() {
      this.placelenth = this.place.length;
      const page = 10; //  一個 page 要顯示多少資料
      // const pageAll = Math.ceil(this.placelenth / page);
      // console.log(`全部資料共： ${this.placelenth} ,每頁顯示： ${page}筆,總頁數： ${pageAll}頁`);
      this.pages = Math.ceil(this.placelenth / page);
      // console.log(`全部資料共： ${this.placelenth} ,每頁顯示： ${page}筆,總頁數： ${this.pages}頁`);
    },
    getPagesRender(test = 0) {
      const keywordTxt = this.select;
      if (this.select === '請選擇') {
        console.log(`頁碼：${test}`);
        const testget = test * 10;
        console.log(`略過前幾筆：${testget}`);
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${10}&$skip=${testget}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.demoplace = res.data;
          this.pagination();
        }).catch(() => {
          console.log('失敗');
        });
      } else if (this.select === '全部') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${100}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.demoplace = res.data;
          const num = this.demoplace.filter((item) => item.Picture.PictureUrl1);
          this.demoplace = num;
          this.pagination();
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        const testget = test * 10;
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${keywordTxt}')&$top=${10}&$skip=${testget}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.demoplace = res.data;
          const num = this.demoplace.filter((item) => item.Picture.PictureUrl1);
          this.demoplace = num;
          this.pagination();
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
  },
  computed: {
    textsearch() {
      // return this.place.filter((item) => item.Name.match(this.search));
      // return this.place.filter((item) => {
      //   console.log(item);
      //   return item.Name.match(this.search);
      // });
      return this.demoplace.filter((item) => item.Name.match(this.search));
    },
  },
  watch: {
    select(a, b) {
      this.verify();
      this.getPagesRender();
      console.log(a, b);
    },
  },
  mounted() {
    this.verify();
    this.getPagesRender();
    // console.log(document.querySelector('#demo'));
    // console.log(this);
    // console.log(this.$refs);
    // console.log(this.$refs.demo);
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
