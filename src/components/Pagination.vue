<template>
<div class="row">
  <div class="col-12">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages" :key="page.id">
          <a class="page-link" href="#" @click.prevent="$emit('setpages', page)"> {{ page }} </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    分頁：{{ this.pages }}
    型別驗證：{{ pages }}
  </div>
</div>
</template>
<script>
export default {
  // props: ['pages'],
  props: {
    pages: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      getpage: 0,
    };
  },
  methods: {
    settime() {
      // 撈取 pages 測試，直接使用生命週期會抓不到 pages 的值，因為非同步的關係。
      // setTimeout(() => {
      //   console.log(`setTime pages: ${this.pages}`);
      //   this.dataGpages = this.pages;
      //   console.log(`setTime dataGpages: ${this.dataGpages}`);
      // }, 2000);
      // this.dataGpages = this.pages;
    },
  },
  watch: {
    // getPages(a, b) {
    //   // this.settime();
    //   this.dataGpages = this.pages;
    //   console.log(a, b);
    // },
    pages() {
      this.getpage = this.pages;
    },
  },
  mounted() {
    this.settime();
  },
};
</script>
