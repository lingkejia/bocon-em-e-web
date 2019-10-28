<template>
  <div class="enterprise">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">企业管理</span>
      </div>
      <div class="h-panel-body">
        <div class="h-input-group" v-width="400" style="margin-bottom:20px;">
          <input type="text" placeholder="输入企业名称" />
          <Button color="blue" icon="h-icon-search">搜索</Button>
        </div>
        <Table :datas="datas" stripe :loading="loading">
          <TableItem title="企业名称" prop="name"></TableItem>
          <TableItem title="操作" :width="200" fixed="right">
            <template slot-scope="{data}">
              <button class="h-btn h-btn-s h-btn-green" @click="remove(datas, data)">
                <i class="h-icon-user"></i>管理用户
              </button>
              <button class="h-btn h-btn-s h-btn-blue" @click="remove(datas, data)">
                <i class="h-icon-edit"></i>
              </button>
              <button class="h-btn h-btn-s h-btn-red" @click="remove(datas, data)">
                <i class="h-icon-trash"></i>
              </button>
            </template>
          </TableItem>
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
    return {
      datas: [{ id: 5, name: "临沂市宇顺机械有限公司" }]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.enterprise {
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