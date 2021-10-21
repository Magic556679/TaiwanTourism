<template>
  <div class="about">
    <h1>This is TDX</h1>
  </div>
  <div class="container">
    <div class="row">
        <div class="col-12 col-lg-3" v-for="item in place" :key="item.id">
          <div class="card" style="width: 18rem;">
          <img :src="item.Picture.PictureUrl1" class="card-img-top" alt="...">
          <div class="card-body">
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
    };
  },
  methods: {
    demo() {
      function getAuthorizationHeader() {
        const AppID = '5b92a1059adc479db7aac18c4913150a';
        const AppKey = 'IZj0rm4jFCuk7Yl_DrfEZrs48Lw';
        const GMTString = new Date().toGMTString();
        const ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update(`x-date: ${GMTString}`);
        const HMAC = ShaObj.getHMAC('B64');
        const Authorization = `hmac username=\"${AppID}\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"${HMAC}\"`;
        return { 'Authorization': Authorization, 'X-Date': GMTString };
      }
      const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=10&$format=JSON';
      this.$http.get(url, { headers: getAuthorizationHeader() }).then((res) => {
        this.place = res.data;
        console.log(this.place);
      }).catch(() => {
        console.log('失敗');
      });
    },
  },
  mounted() {
    this.demo();
  },
};
</script>
