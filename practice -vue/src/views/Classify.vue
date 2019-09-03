<template>
  <div>
    <Nav>
      <router-link to="/classify/hot" tag="span">热门</router-link>
      <router-link to="/classify/newbook" tag="span">新书</router-link>
      <router-link to="/classify/free" tag="span">免费</router-link>
      <router-link to="/classify/end" tag="span">完本</router-link>
    </Nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>