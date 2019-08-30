<template>
  <div class="footer">
    <router-link tag="span" to="/home">首页</router-link>
    <router-link tag="span" to="/discover">发现</router-link>
    <router-link tag="span" to="/order">订单</router-link>
    <router-link tag="span" to="/my">我的</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer{
    width: 100%;
    height: 1.33333rem;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    position: fixed;
    bottom: 0;
}
</style>