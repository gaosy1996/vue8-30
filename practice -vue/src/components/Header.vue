<template>
  <div class="header">
    <router-link tag="span" to="/home">首页</router-link>
    <router-link tag="span" to="/classify">分类</router-link>
    <router-link tag="span" to="/ranking">排行</router-link>
    <router-link tag="span" to="/bookrack">书架</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header{
    width: 100%;
    height: 1.33333rem;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    background: #323332;
    color: #eee;
}
</style>