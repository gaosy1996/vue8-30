<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000
        }
      }
    };
  },
  computed: {
    ...mapState(["swiperList"])
  },
  methods: {
    ...mapActions(["getSwiperListFn"])
  },
  created() {
    this.getSwiperListFn();
  }
};
</script>

<style scoped>
</style>