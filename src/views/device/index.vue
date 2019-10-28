<template>
  <div class="device">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">设备维护</span>
        <span class="h-panel-right">
          <Button color="primary" :circle="true" icon="h-icon-plus">添加设备</Button>
          <Button color="blue" :circle="true" icon="h-icon-edit">修改设备</Button>
          <Button color="red" :circle="true" icon="h-icon-trash">删除设备</Button>
        </span>
      </div>
      <div class="h-panel-body">
        <h3>总用电（3个）</h3>
        <div class="box">
          <div v-for="n in 3">
            <div class="bg-blue-color white-color item relative">
              <div class="middle-center" v-font="18">车间总表</div>
            </div>
          </div>
        </div>
        <h3>产污设施（10个）</h3>
        <div class="box">
          <div v-for="n in 10">
            <div class="bg-green-color white-color item relative">
              <div class="middle-center" v-font="18">南路车床</div>
            </div>
          </div>
        </div>
        <h3>治污设施（2个）</h3>
        <div class="box">
          <div v-for="n in 2">
            <div class="bg-red-color white-color item relative">
              <div class="middle-center" v-font="18">南路车床</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.device {
  .box {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .item {
      width: 200px;
      height: 80px;
      border-radius: 10px;
      margin: 15px 15px 5px 0px;
    }
  }
}
</style>