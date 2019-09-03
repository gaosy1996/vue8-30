<template>
  <div>
    <button @click="editBtn">{{flag?'完成':'编辑'}}</button>
    <ul>
      <li v-for="(item,index) in myBookShelf" :key="index">
        <h3>{{item.bookName}}</h3>
        <p>{{item.description}}</p>
        <button v-show="flag" @click="removeMyBookShelf(item.bookId)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      flag: false
    };
  },
  computed: {
    ...mapState(["myBookShelf"])
  },
  methods: {
    ...mapMutations(['removeMyBookShelf']),
    editBtn() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style scoped>
</style>