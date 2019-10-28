<template>
  <div class="relation">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">设备关联</span>
        <span class="h-panel-right">
          <Button color="blue" :circle="true" icon="h-icon-edit">修改</Button>
        </span>
      </div>
      <div class="h-panel-body">
        <Row>
          <Cell width="4">
            <span class="h-tag h-tag-blue" v-margin="20">生产车间</span>
            <div class="left-border">
              <Menu class="h-menu-white" :datas="data1" ref="menu1"></Menu>
            </div>
          </Cell>
          <Cell width="4">
            <span class="h-tag h-tag-yellow" v-margin="20">治污设施</span>
            <div class="left-border">
              <Menu class="h-menu-white" :datas="data2" ref="menu2"></Menu>
            </div>
          </Cell>
          <Cell width="16">
            <div class="device left-border" ref="box">
              <h3>产污设施</h3>
              <div class="box">
                <div v-for="n in 3">
                  <div class="bg-blue-color white-color item relative">
                    <div class="middle-center" v-font="18">喷涂车间</div>
                  </div>
                </div>
              </div>
            </div>
          </Cell>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data1: [
        {
          title: "车间1",
          key: "room1"
        },
        {
          title: "车间2",
          key: "room2"
        }
      ],
      data2: [
        {
          title: "除尘风机",
          key: "dev1"
        },
        {
          title: "烟气净化",
          key: "dev2"
        }
      ]
    };
  },
  watch: {},
  mounted() {
    this.$refs.menu1.select("room1");
    this.$refs.menu2.select("dev2");
  }
};
</script>
<style lang="less" scoped>
@box-height: 400px;
.relation {
  .left-border {
    min-height: @box-height;
    border-left: 1px solid #f5f5f5;
  }
  .device {
    padding: 0px 30px;
  }
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