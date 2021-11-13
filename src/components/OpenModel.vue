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
            <select name="全部地區" v-model="select">
            <option disabled>請選擇</option>
            <option v-for="item in sortselect" :key="item.id" :value="item">{{ item }}</option>
            </select>
          </div>
          <div>
            <h3>西部地區</h3>
            <input type="text">
          </div>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div>
            <h3>南部地區</h3>
            <input type="text">
          </div>
          <div>
            <h3>北部地區</h3>
            <input type="text">
          </div>
        </div>
        <div class="modal-footer mx-auto">
          <!-- <button type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button> -->
          <button type="text" class="btn btn-taifun rounded-4 px-5 py-2">搜尋</button>
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
  },

  data() {
    return {
      model: '',
      select: '請選擇',
      sortselect: '',
    };
  },
  methods: {
    openModel() {
      this.model.show();
    },
    test() {
      console.log('this openModel');
    },
  },
  mounted() {
    this.sortselect = this.sort;
    //  初始化 model
    this.model = new Modal(this.$refs.modal);
  },
};
</script>
<style lang="scss" scoped>
</style>
