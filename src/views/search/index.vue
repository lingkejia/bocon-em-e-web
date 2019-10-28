<template>
  <div class="search">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">数据查询</span>
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
          <li class="params-ul-title">时间</li>
          <li class="params-ul-active">今天</li>
          <li>昨天</li>
          <li>本周</li>
          <li>所有</li>
        </ul>
        <div class="bottom-line" style="margin-bottom:30px;"></div>

        <Table :datas="datas" stripe :loading="loading">
          <TableItem title="时间" prop="time"></TableItem>
          <TableItem title="车间名称" prop="roomName"></TableItem>
          <TableItem title="设备名称" prop="deviceName"></TableItem>
          <TableItem title="A相电压" prop="data"></TableItem>
          <TableItem title="B相电压" prop="data"></TableItem>
          <TableItem title="C相电压" prop="data"></TableItem>
          <TableItem title="A相电流" prop="data"></TableItem>
          <TableItem title="B相电流" prop="data"></TableItem>
          <TableItem title="C相电流" prop="data"></TableItem>
          <TableItem title="设备功率" prop="data"></TableItem>
          <TableItem title="设备用电量" prop="data"></TableItem>
          <div slot="empty">暂时无数据</div>
        </Table>
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
.search {
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