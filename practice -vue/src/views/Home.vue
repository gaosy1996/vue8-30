<template>
  <div>
    首页
    <ul>
      <li v-for="(item,index) in dataList" :key="index">
        <span>{{item.LabelName}}</span>
        <span>{{item.Desc}}</span>
        <span>{{item.Linkage}}</span>
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
    ...mapState(["dataList"])
  },
  methods: {
    ...mapActions(["getDataFn"])
  },
  created() {
    this.getDataFn();
  }
};
</script>

<style scoped>
</style>