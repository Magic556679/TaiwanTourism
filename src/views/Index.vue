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
      <!-- 景點 -->
      <div class="row" v-if="this.sorttext === '請選擇'||this.sorttext === '熱門景點'">
        <div class="col-12 mt-5">
          <div class="icon d-flex align-items-center">
            <h2 class="text-taifun m-0">熱門景點</h2>
            <img class="ps-4" src="@/assets/images/Attractions.png" alt="">
          </div>
        </div>
        <div class="col-12 col-lg-3" v-for="item in attractionsData" :key="item.id">
          <div class="card mt-5" >
            <img
              :src="item.Picture.PictureUrl1"
              class="card-img-top"
              :alt="item.Picture.PictureDescription1"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.City }}</h5>
              <h3 class="card-title">{{ item.Name }}</h3>
              <h5>開放時間</h5>
              <h5 class="card-title">{{ item.OpenTime }}</h5>
            </div>
            <div class="mx-auto pb-3">
              <button type="button" class="btn btn-taifun px-4">查看詳情</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 美食 -->
      <div class="row" v-else-if="this.sorttext === '熱門美食'">
        <div class="col-12 mt-5">
          <div class="icon d-flex align-items-center">
            <h2 class="text-taifun m-0">熱門美食</h2>
            <img class="ps-4" src="@/assets/images/delicacy.png" alt="">
          </div>
        </div>
        <div class="col-12 col-lg-3" v-for="item in delicacyData" :key="item.id">
          <div class="card mt-5" >
            <img
              :src="item.Picture.PictureUrl1"
              class="card-img-top"
              :alt="item.Picture.PictureDescription1"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.City }}</h5>
              <h3 class="card-title">{{ item.Name }}</h3>
              <h5>開放時間</h5>
              <h5 class="card-title">{{ item.OpenTime }}</h5>
            </div>
            <div class="mx-auto pb-3">
              <button type="button" class="btn btn-taifun px-4">查看詳情</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 住宿 -->
      <div class="row" v-else-if="this.sorttext === '熱門住宿'">
        <div class="col-12 mt-5">
          <div class="icon d-flex align-items-center">
            <h2 class="text-taifun m-0">熱門住宿</h2>
            <img class="ps-4" src="@/assets/images/Activity.png" alt="">
          </div>
        </div>
        <div class="col-12 col-lg-3" v-for="item in stayData" :key="item.id">
          <div class="card mt-5" >
            <img
              :src="item.Picture.PictureUrl1"
              class="card-img-top"
              :alt="item.Picture.PictureDescription1"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.City }}</h5>
              <h3 class="card-title">{{ item.Name }}</h3>
              <h5>開放時間</h5>
              <h5 class="card-title">{{ item.OpenTime }}</h5>
            </div>
            <div class="mx-auto pb-3">
              <button type="button" class="btn btn-taifun px-4">查看詳情</button>
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
      attractionsData: [],
      delicacyData: [],
      stayData: [],
      placelenth: 0, //  place陣列長度
      pages: 0, //  當前頁碼
      keywordSearch: '',
      select: '請選擇',
      city: ['全部', '臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '金門縣', '澎湖縣', '連江縣'],
      east: ['宜蘭縣', '花蓮縣', '臺東縣'], //  東
      west: ['臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市'], //  西
      south: ['臺南市', '高雄市', '屏東縣'], //  南
      north: ['臺北市', '新北市', '桃園市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣'], // 北
      sorttext: '請選擇',
      geteast: '',
      getwest: '',
      getsouth: '',
      getnorth: '',
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
      const eastCity = this.geteast;
      const westCity = this.getwest;
      const southCity = this.getsouth;
      const northCity = this.getnorth;
      if (eastCity !== '' && eastCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${eastCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.attractionsData = res.data;
          console.log('東部成功');
          const num = this.attractionsData.filter((item) => item.Picture.PictureUrl1);
          this.attractionsData = num;
        }).catch(() => {
          console.log('失敗');
        });
      } else if (westCity !== '' && westCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${westCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.attractionsData = res.data;
          const num = this.attractionsData.filter((item) => item.Picture.PictureUrl1);
          this.attractionsData = num;
          console.log('西部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else if (southCity !== '' && southCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${southCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.attractionsData = res.data;
          const num = this.attractionsData.filter((item) => item.Picture.PictureUrl1);
          this.attractionsData = num;
          console.log('南部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else if (northCity !== '' && northCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${northCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.attractionsData = res.data;
          const num = this.attractionsData.filter((item) => item.Picture.PictureUrl1);
          this.attractionsData = num;
          console.log('北部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.attractionsData = res.data;
          const num = this.attractionsData.filter((item) => item.Picture.PictureUrl1);
          this.attractionsData = num;
          console.log(this.attractionsData);
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
    delicacy() {
      const eastCity = this.geteast;
      const westCity = this.getwest;
      const southCity = this.getsouth;
      const northCity = this.getnorth;
      if (eastCity !== '' && eastCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(City,'${eastCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.delicacyData = res.data;
          console.log('東部成功');
          const num = this.delicacyData.filter((item) => item.Picture.PictureUrl1);
          this.delicacyData = num;
          // console.log(this.geteast, this.getwest, this.getsouth, this.getnorth);
        }).catch(() => {
          console.log('失敗');
        });
      } else if (westCity !== '' && westCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(City,'${westCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.delicacyData = res.data;
          const num = this.delicacyData.filter((item) => item.Picture.PictureUrl1);
          this.delicacyData = num;
          console.log('西部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else if (southCity !== '' && southCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(City,'${southCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.delicacyData = res.data;
          const num = this.delicacyData.filter((item) => item.Picture.PictureUrl1);
          this.delicacyData = num;
          console.log('南部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else if (northCity !== '' && northCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(City,'${northCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.delicacyData = res.data;
          const num = this.delicacyData.filter((item) => item.Picture.PictureUrl1);
          this.delicacyData = num;
          console.log('北部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.delicacyData = res.data;
          const num = this.delicacyData.filter((item) => item.Picture.PictureUrl1);
          this.delicacyData = num;
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
    stay() {
      const eastCity = this.geteast;
      const westCity = this.getwest;
      const southCity = this.getsouth;
      const northCity = this.getnorth;
      if (eastCity !== '' && eastCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(City,'${eastCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.stayData = res.data;
          console.log('東部成功');
          const num = this.stayData.filter((item) => item.Picture.PictureUrl1);
          this.stayData = num;
          // console.log(this.geteast, this.getwest, this.getsouth, this.getnorth);
        }).catch(() => {
          console.log('失敗');
        });
      } else if (westCity !== '' && westCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(City,'${westCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.stayData = res.data;
          const num = this.stayData.filter((item) => item.Picture.PictureUrl1);
          this.stayData = num;
          console.log('西部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else if (southCity !== '' && southCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(City,'${southCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.stayData = res.data;
          const num = this.stayData.filter((item) => item.Picture.PictureUrl1);
          this.stayData = num;
          console.log('南部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else if (northCity !== '' && northCity !== '選擇縣市') {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(City,'${northCity}')&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.stayData = res.data;
          const num = this.stayData.filter((item) => item.Picture.PictureUrl1);
          this.stayData = num;
          console.log('北部成功');
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${8}&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.stayData = res.data;
          const num = this.stayData.filter((item) => item.Picture.PictureUrl1);
          this.stayData = num;
          console.log(this.stayData);
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
    open() {
      this.$refs.searchOpen.openModel();
    },
    getSeatch(a, b, c, d, e) {
      console.log(a, b, c, d, e);
      this.sorttext = a;
      this.geteast = b;
      this.getwest = c;
      this.getsouth = d;
      this.getnorth = e;
      this.verify();
      this.delicacy();
      this.stay();
    },
  },
  watch: {
    geteast(n, o) {
      console.log(n, o);
    },
  },
  mounted() {
    this.verify();
    this.delicacy();
    this.stay();
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
@media screen and (max-width: 414px) {
    header {
      padding: 35% 0 5% 0;
    }
}
main {
  img {
    height: 250px;
    object-fit: cover;
  }
  .icon {
    img {
      height: 35px;
    }
  }
}
</style>
