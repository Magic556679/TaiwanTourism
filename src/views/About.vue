<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// import jsshatest from '../assets/javascript/jssha';
import jsSHA from '../../node_modules/jssha';

export default {
  data() {
    return {};
  },
  methods: {
    demo() {
      function getAuthorizationHeader() {
        const AppID = '5b92a1059adc479db7aac18c4913150a';
        const AppKey = 'IZj0rm4jFCuk7Yl_DrfEZrs48Lw';
        const GMTString = new Date().toGMTString();
        const ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        // ShaObj.update(`x-date: + ${GMTString}`);
        const HMAC = ShaObj.getHMAC('B64');
        const Authorization = `hmac username=\`${AppID}\`, algorithm=\`hmac-sha1\`,headers=\`x-date\`, signature=\`${HMAC}\``;
        console.log(jsSHA);
        console.log(Authorization);
        return { 'Authorization': Authorization, 'X-Date': GMTString };
      }
      const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=5&$format=JSON';
      this.$http.get(url, { headers: getAuthorizationHeader() }).then((res) => {
        console.log(res);
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
