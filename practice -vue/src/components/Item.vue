<template>
  <div>
    <dl>
      <dt>
        <img src />
      </dt>
      <dd>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
dl {
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
}

dl dt {
  width: 100px;
  height: 120px;
}

dl dt img {
  width: 100%;
  height: 100%;
}

dl dd {
  flex: 1;
}
</style>