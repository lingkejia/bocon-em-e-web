<template>
  <div class="alarm">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">事件预警</span>
      </div>
      <div class="h-panel-body">
        <ul class="params-ul">
          <li class="params-ul-title">设备</li>
          <li class="params-ul-active">所有</li>
          <li>设备1</li>
          <li>设备2</li>
          <li>设备3</li>
        </ul>
        <ul class="params-ul">
          <li class="params-ul-title">类型</li>
          <li class="params-ul-active">所有</li>
          <li v-for="item in devList">{{item.name}}</li>
        </ul>
        <ul class="params-ul">
          <li class="params-ul-title">时间</li>
          <li class="params-ul-active">今天</li>
          <li>昨天</li>
          <li>本周</li>
          <li>所有</li>
        </ul>
        <div class="bottom-line" style="margin-bottom:30px;"></div>
        <div class="bottom-line" style="margin-bottom:10px;" v-for="n in 10">
          <div>
            <span v-color:red v-font="16">设备停电</span>
            <span class="float-right">2019-10-15 02:30:0</span>
          </div>
          <p>除尘在2019-10-15 02:30:00时间后，在15分钟内没有传输生产设备数据，属于离线异常</p>
        </div>
        <Pagination v-model="pagination" align="right" small></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      devList: this.$store.state.exType,
      pagination: {
        page: 1,
        size: 10,
        total: 100
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.alarm {
  .params-ul {
    // display: inline;
    margin-bottom: 15px;
    .params-ul-title {
      font-weight: bold;
      margin-right: 30px;
    }
    li {
      margin-right: 15px;
      display: inline;
    }
    .params-ul-active {
      background: #3788ee;
      padding: 5px 10px;
      color: #fff;
    }
  }
}
</style>