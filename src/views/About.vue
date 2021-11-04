<template>
  <div class="about">
    <h1>This is TDX</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <select name="全部地區" v-model="select">
          <option disabled>請選擇</option>
          <option v-for="item in city" :key="item.index" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <div class="row mt-5">
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
import jsSHA from '../../node_modules/jssha';

export default {
  data() {
    return {
      place: [],
      select: '請選擇',
      city: ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '金門縣', '澎湖縣', '連江縣'],
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
        // const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON';
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=20&$format=JSON';
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
          console.log('請選擇');
        }).catch(() => {
          console.log('失敗');
        });
      } else {
        //  $filter=Picture%2FPictureUrl1%20ne%20null
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'${keywordTxt}')&$top=30&$format=JSON`;
        this.$http.get(url, { headers: this.getAuthorizationHeader() }).then((res) => {
          this.place = res.data;
          // 如果有圖片（Picture.PictureUrl1）的話就顯示
          const num = this.place.filter((item) => item.Picture.PictureUrl1 !== undefined);
          this.place = num;
        }).catch(() => {
          console.log('失敗');
        });
      }
    },
  },
  watch: {
    select() {
      this.verify();
    },
  },
  mounted() {
    this.verify();
  },
};
</script>
