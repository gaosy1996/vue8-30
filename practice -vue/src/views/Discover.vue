<template>
  <div>
    <ul>
      <li v-for="(item,index) in menuList" :key="index">
        <span @click="btn">{{item.type}}</span>
        <p v-for="(ite) in item.list" :key="ite.id">
          <b>{{ite.title}}</b>
          <img src="ite.url" />
        </p>
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
    ...mapState(["menuList"])
  },
  methods: {
    ...mapActions(["getMenuListFn"]),
    btn() {
      console.log(111);
    }
  },
  created() {
    this.getMenuListFn();
  }
};
</script>

<style scoped>
</style>