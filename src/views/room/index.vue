<template>
  <div class="room">
    <div class="h-panel h-panel-no-border">
      <div class="h-panel-bar">
        <span class="h-panel-title">车间维护</span>
        <span class="h-panel-right">
          <Button color="primary" :circle="true" icon="h-icon-plus">添加车间</Button>
          <Button color="blue" :circle="true" icon="h-icon-edit">修改车间</Button>
          <Button color="red" :circle="true" icon="h-icon-trash">删除车间</Button>
        </span>
      </div>
      <div class="h-panel-body">
        <div class="box">
          <div v-for="n in 3">
            <div
              class="bg-blue-color white-color item relative"
              :class="{'bg-green-color':active==n}"
              @click="select(n)"
            >
              <div class="middle-center" v-font="18">喷涂车间</div>
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
    return {
      active: -1
    };
  },
  methods: {
    select(n) {
      this.active = n;
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.room {
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