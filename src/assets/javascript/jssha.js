export default function getAuthorizationHeader() {
  const AppID = '5b92a1059adc479db7aac18c4913150a';
  const AppKey = 'IZj0rm4jFCuk7Yl_DrfEZrs48Lw';
  const GMTString = new Date().toGMTString();
  const ShaObj = new jssha('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: + ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username=\`${AppID}\`, algorithm=\`hmac-sha1\`,headers=\`x-date\`, signature=\`${HMAC}\``;
  console.log(jssha);
  console.log(Authorization);
  return { 'Authorization': Authorization, 'X-Date': GMTString };
}
