<template>
  <div class="home">
    <Layout :siderFixed="true" :siderCollapsed="siderCollapsed">
      <Sider theme="white" style="box-shadow:0 1px 4px rgba(0,21,41,.08);">
        <div class="layout-logo">
          <img :src="logo" height="34px" alt />
        </div>
        <Menu
          ref="menu"
          style="margin-top: 45px;"
          class="h-menu-white"
          :datas="menuDatas"
          :inlineCollapsed="siderCollapsed"
          @click="select"
        ></Menu>
      </Sider>
      <Layout :headerFixed="true">
        <HHeader theme="white" style="box-shadow:0 1px 4px 0 rgba(0,21,41,.08)">
          <div style="width:100px;float:left;">
            <Button
              icon="h-icon-menu"
              size="l"
              noBorder
              style="font-size: 20px"
              @click="siderCollapsed=!siderCollapsed"
            ></Button>
          </div>
          <div class="float-right app-header-info">
            <div class="app-header-icon-item" v-tooltip ref-el="qrcode" theme="white">
              <i class="iconfont icon-erweima" v-font="20"></i>
            </div>
            <div class="app-header-icon-item">
              <Badge :count="16">
                <i class="iconfont icon-lingdang" v-font="20"></i>
              </Badge>
            </div>
            <div class="app-header-icon-item">
              <i class="iconfont icon-Group-" v-font="20"></i>
            </div>
            <div class="app-header-icon-item" @click="logoff">
              <i class="iconfont icon-tuichu" v-font="20"></i>
            </div>
          </div>
        </HHeader>
        <Content style="padding: 0px 30px;">
          <div class="content">
            <router-view></router-view>
          </div>
          <HFooter class="text-center">
            Copyright © 2003 - 2019
            <a href="http://www.bocon.cn" target="_blank">广州博控自动化技术有限公司</a>
            系统版本：
            <span class="primary-color">V1.0.0</span>
          </HFooter>
        </Content>
      </Layout>
    </Layout>
    <div tmpl="qrcode" v-width="220">
      <div v-padding="20">
        <img
          width="100%"
          height="100%"
          style="border-radius:10px;"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571312797803&di=855540b860f5aa645304b37cb6e5dc4e&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2F1c%2Ff3%2F26%2F1cf3269381ca13b056343560bc4250c4.jpg"
        />
        <p class="text-center">扫码下载企业APP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
      siderCollapsed: false,
      menuDatas: [
        { title: "企业概览", key: "dashboard", icon: "h-icon-home" },
        { title: "数据查询", key: "search", icon: "h-icon-search" },
        {
          title: "事件预警",
          icon: "iconfont icon-jingshi",
          key: "alarm"
        },
        {
          title: "设备维护",
          icon: "iconfont icon-shebei",
          key: "device"
        },
        {
          title: "设备关联",
          icon: "iconfont icon-guanlian",
          key: "relation"
        },
        {
          title: "车间维护",
          icon: "iconfont icon-shengchanqihuoziyuan",
          key: "room"
        },
        {
          title: "企业备案",
          icon: "iconfont icon-beian",
          key: "baseinfo"
        },
        { title: "日志查询", icon: "iconfont icon-rizhi", key: "log" },
        {
          title: "企业管理",
          icon: "iconfont icon-banben",
          key: "enterprise"
        },
        {
          title: "用户管理",
          icon: "iconfont icon-weibiaoti2fuzhi12",
          key: "user"
        },
        { title: "权限管理", icon: "iconfont icon-ic_opt_feature", key: "role" }
      ],
      datas: [
        { icon: "h-icon-home" },
        {
          title: "Component",
          icon: "h-icon-complete",
          route: { name: "Component" }
        },
        { title: "Breadcrumb", icon: "h-icon-star" }
      ]
    };
  },
  watch: {
    $route() {
      if (this.$route.name) {
        //router的name与menu的key对应
        this.$refs.menu.select(this.$route.name);
      }
    },
    siderCollapsed(val) {
      if (val) {
        this.logo = require("@/assets/logo-min.png");
      } else {
        this.logo = require("@/assets/logo.png");
      }
    }
  },
  methods: {
    select(data) {
      this.$router.push({ name: data.key });
    },
    logoff() {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
  mounted() {
    this.$refs.menu.select(this.$route.name);
  }
};
</script>

<style lang="less">
.home {
  .h-layout {
    background: #f0f2f5;
  }

  .layout-logo {
    height: 34px;
    margin: 16px 24px;
    text-align: center;
  }

  .h-layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
  .h-menu-white {
    color: #313a46;
  }
  .content {
    // background: rgb(255, 255, 255);
    min-height: calc(100vh - 180px);
    margin-top: 30px;
  }

  .app-header-info {
    cursor: pointer;
    display: inline-block;
    .app-header-icon-item {
      float: left;
      padding: 0 15px;
      height: 64px;
      line-height: 64px;
      margin-right: 10px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
