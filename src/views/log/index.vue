<template>
  <div class="log">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">日志查询</span>
      </div>
      <div class="h-panel-body">
        <div class="h-input-group" v-width="400" style="margin-bottom:20px;">
          <input type="text" placeholder="输入MN号码" />
          <Button color="blue" icon="h-icon-search">搜索</Button>
        </div>
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
          <TableItem title="MN" prop="roomName"></TableItem>
          <TableItem title="CN" prop="deviceName"></TableItem>
          <TableItem title="QN" prop="data"></TableItem>
          <TableItem title="解析状态" prop="data"></TableItem>
          <TableItem title="报文内容" prop="data"></TableItem>
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
.log {
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