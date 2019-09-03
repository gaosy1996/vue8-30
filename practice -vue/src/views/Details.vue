<template>
  <div>
    <button @click="toBookshelf">书架</button>
    详情页
    <!-- {{this.item}} -->
    {{item.updteChapterName}}
    {{item.authorName}}
    {{item.description}}
    <button
      @click="addMyBookShelf(item)"
    >添加书架</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      item: {}
    };
  },
  mounted() {
    //query接收参数
    // this.item = this.$route.query.item;

    //params接收参数
    this.item = this.$route.params.item;
  },
  methods: {
    ...mapMutations(["addMyBookShelf"]),
    toBookshelf() {
      this.$router.push({
        path: "/bookrack"
      });
    }
  }
};
</script>

<style scoped>
</style>