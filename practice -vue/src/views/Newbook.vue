<template>
  <div>
    <ul>
      <li v-for="(item,index) in newBookList" :key="index">
        <b>{{item.subCateName}}</b>
        <h3>{{item.bookName}}</h3>
        <p>作者：{{item.authorName}}</p>
        <p>简介：{{item.description}}</p>
        <p>更新至：{{item.updteChapterName}}</p>
        <img src="item.coverUrl" />
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
    ...mapState(["newBookList"])
  },
  methods: {
    ...mapActions(["getnewBookListFn"])
  },
  created() {
    this.getnewBookListFn();
  }
};
</script>

<style scoped>
</style>