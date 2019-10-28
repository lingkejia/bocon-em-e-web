<template>
  <div class="error-404">
    <div class="relative full">
      <div class="background-image" :style="{backgroundImage:'url('+bg+')'}"></div>
      <div class="middle-center blue-color" v-font="28">
        <p>您访问的页面根本不存在</p>
        <p @click="$router.go(-1)" v-font="16">返回上页</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bg: require("@/assets/404.png")
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.error-404,
.full {
  height: 100vh;
  .background-image {
    height: 35vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    margin: 18vh auto 50px;
  }
}
</style>