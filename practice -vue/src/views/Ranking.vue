<template>
  <div>
    <ul class="tabList">
      <li
        v-for="(item,index) in tabTitle"
        :key="index"
        :class="index===idx ? 'active' : '' "
        @click="tabBtn(index)"
      >
        <span>{{item}}</span>
      </li>
    </ul>

    <div class="con"></div>
  </div>
</template>

<script>
import mock from "../mock";
export default {
  data() {
    return {
      tabTitle: ["热门", "新书", "免费", "文本"],
      idx: 0
    };
  },
  methods: {
    tabBtn(index) {
      this.idx = index;
    }
  }
};
</script>

<style scoped>
.tabList {
  width: 100%;
  height: 44px;
  padding: 5px 10px;
  display: flex;
  box-sizing: border-box;
}

.tabList li {
  flex: 1;
  height: 36px;
  margin: 0 5px;
  text-align: center;
  line-height: 36px;
  border-radius: 5px;
  color: #4c4c4c;
  background: #f2f2f2;
}

.tabList li.active {
  background: red;
  color: #fff;
}
</style>