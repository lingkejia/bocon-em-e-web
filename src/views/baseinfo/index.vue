<template>
  <div class="baseinfo">
    <Row :space="30">
      <Cell width="6">
        <div class="h-panel h-panel-no-border">
          <div class="h-panel-body">
            <div class="preview">
              <div class="text-center">
                <Avatar
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571316468788&di=86b3c5e1aca34885e0634e9f3e15492e&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F06%2F14%2F59012a5d13f98_610.jpg"
                  :width="100"
                  fit="fill"
                  noInfo
                ></Avatar>
              </div>
              <p
                v-font="18"
                class="text-center blue-color"
                style="margin:20px auto 50px auto;"
              >广州博控自动化技术有限公司</p>
              <p>
                <i class="h-icon-user"></i>
                <span>凌可佳</span>
              </p>
              <p>
                <i class="iconfont icon-shouji"></i>
                <span>17576060722</span>
              </p>
              <p>
                <i class="h-icon-location"></i>
                <span>新疆阿克苏地区阿克苏市东大街26号</span>
              </p>
              <div class="dot"></div>
              <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
                <bm-marker
                  :position="{lng: 116.404, lat: 39.915}"
                  :dragging="true"
                  animation="BMAP_ANIMATION_BOUNCE"
                ></bm-marker>
              </baidu-map>
            </div>
          </div>
        </div>
      </Cell>
      <Cell width="18">
        <div class="h-panel h-panel-no-border">
          <div class="h-panel-body">
            <Tabs :datas="{name:'企业基本信息'}" v-model="selected"></Tabs>
            <div v-width="400" v-padding="30">
              <Form ref="form" :labelWidth="120" :model="data">
                <FormItem label="用户名">
                  <template v-slot:label>统一社会信用代码</template>
                  <input type="text" v-model="data.name" />
                </FormItem>
                <FormItem label="企业地址">
                  <template v-slot:label>企业地址</template>
                  <div class="h-input-group">
                    <input type="text" placeholder="输入" />
                    <Button color="blue">地图定位</Button>
                  </div>
                </FormItem>
                <FormItem>
                  <Button color="primary">保存</Button>&nbsp;&nbsp;&nbsp;
                  <Button>重置</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </Cell>
    </Row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: "name",
      readonly: true,
      data: {
        name: "小王",
        age: 18,
        school: "中国某某大学",
        sex: "女"
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.baseinfo {
  .preview {
    i {
      margin-right: 10px;
    }
    .dot {
      border-bottom: 1px dotted #d3d3d3;
      margin-bottom: 20px;
    }
    .map {
      width: 100%;
      height: 150px;
    }
  }
}
</style>