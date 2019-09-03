<template>
  <div>
    <ul>
      <li v-for="(item,index) in hotList" :key="index" @click="toDetial(item)">
        <b>{{item.subCateName}}</b>
        <h3>{{item.bookName}}</h3>
        <p>作者：{{item.authorName}}</p>
        <p>简介：{{item.description}}</p>
        <p>更新至：{{item.updteChapterName}}</p>
        <img :src="item.coverUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["hotList"])
  },
  methods: {
    ...mapActions(["getHotListFn"]),
    toDetial(item) {
      this.$router.push({
        //query传参
        // path: "/details",
        // query: {
        //   item: item
        // }
        //params传参
        name:'Details',
        params:{
          id:item.bookId,
          item:item
        }
      });
    }
  },
  created() {
    this.getHotListFn();
  }
};
</script>

<style scoped>
</style>