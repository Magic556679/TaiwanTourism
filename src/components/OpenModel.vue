<template>
  <div
    class="modal fade"
    ref="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header align-items-start flex-column">
          <h5 class="modal-title" id="exampleModalLabel">分類</h5>
          <br>
          <div>
            <select name="全部地區" v-model="select">
            <option disabled>請選擇</option>
            <option v-for="item in sortselect"
            :key="item.id"
            :value="item">{{ item }}</option>
            </select>
          </div>
          <!-- <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> -->
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div>
            <h3>東部地區</h3>
            <select name="全部地區" v-model="eastselect">
              <option disabled>選擇縣市</option>
              <option v-for="item in modeleast" :key="item.id" :value="item">{{ item }}</option>
            </select>
          </div>
          <div>
            <h3>西部地區</h3>
            <select name="全部地區" v-model="westselect">
              <option disabled>選擇縣市</option>
              <option v-for="item in modelwest" :key="item.id" :value="item">{{ item }}</option>
            </select>
          </div>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div>
            <h3>南部地區</h3>
            <select name="全部地區" v-model="southselect">
              <option disabled>選擇縣市</option>
              <option v-for="item in modelsouth" :key="item.id" :value="item">{{ item }}</option>
            </select>
          </div>
          <div>
            <h3>北部地區</h3>
            <select name="全部地區" v-model="northselect">
              <option disabled>選擇縣市</option>
              <option v-for="item in modelnorth" :key="item.id" :value="item">{{ item }}</option>
            </select>
          </div>
        </div>
        <div class="modal-footer mx-auto">
          <!-- <button type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button> -->
          <button type="button"
          class="btn btn-taifun rounded-4 px-5 py-2"
          @click="$emit('set-search',
          select, eastselect, westselect, southselect, northselect),hideModel()">搜尋</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    sort: {
      type: Array,
    },
    east: {
      type: Array,
    },
    west: {
      type: Array,
    },
    south: {
      type: Array,
    },
    north: {
      type: Array,
    },
  },
  data() {
    return {
      model: '', // bootstrap 存入點
      select: '請選擇', // emit select
      sortselect: '', // ['熱門景點', '熱門美食', '熱門住宿']
      eastselect: '選擇縣市', // 東
      modeleast: '',
      westselect: '選擇縣市', //  西
      modelwest: '',
      southselect: '選擇縣市', //  南
      modelsouth: '',
      northselect: '選擇縣市', //  北
      modelnorth: '',
    };
  },
  methods: {
    openModel() {
      this.model.show();
    },
    hideModel() {
      this.model.hide();
      this.eastselect = '選擇縣市';
      this.westselect = '選擇縣市';
      this.southselect = '選擇縣市';
      this.northselect = '選擇縣市';
    },
  },
  mounted() {
    // ['熱門景點', '熱門美食', '熱門住宿']
    this.sortselect = this.sort;
    // 東西南北
    this.modeleast = this.east;
    this.modelwest = this.west;
    this.modelsouth = this.south;
    this.modelnorth = this.north;
    //  初始化 model
    this.model = new Modal(this.$refs.modal);
  },
};
</script>
<style lang="scss" scoped>
</style>
