<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
}

.active {
  color: red;
}
</style>
