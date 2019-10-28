<template>
  <div class="dashboard">
    <Row :space="30">
      <Cell width="16">
        <div class="h-panel h-panel-no-border">
          <div class="h-panel-bar">
            <span class="h-panel-title">功率（kW）</span>
            <span class="h-panel-right">
              <a>查看数据</a>
            </span>
          </div>
          <div class="h-panel-body">
            <ve-line
              :data="powerChartData"
              :settings="chartSettings"
              :data-empty="powerChartData.rows.length==0"
            ></ve-line>
          </div>
        </div>
        <div class="h-panel h-panel-no-border" style="margin-top:30px;">
          <div class="h-panel-bar">
            <span class="h-panel-title">用电量（kW·h）</span>
            <span class="h-panel-right">
              <a>查看数据</a>
            </span>
          </div>
          <div class="h-panel-body">
            <ve-histogram
              :data="electricityChartData"
              :settings="chartSettings"
              :data-empty="electricityChartData.rows.length==0"
            ></ve-histogram>
          </div>
        </div>
      </Cell>
      <Cell width="8">
        <div class="h-panel h-panel-no-border">
          <div class="h-panel-bar">
            <span class="h-panel-title">事件预警</span>
            <span class="h-panel-right">
              <router-link to="/alarm">查看所有事件</router-link>
            </span>
          </div>
          <div class="h-panel-body">
            <p class="text-center gray-color" v-if="alarmList.length==0">暂无数据</p>
            <div class="bottom-line" style="margin-bottom:10px;" v-for="item in alarmList" v-else>
              <div>
                <span v-color:red>{{item.execptionName}}</span>
                <span class="float-right">{{item.dataTime}}</span>
              </div>
              <p>{{item.info}}</p>
            </div>
            <Loading text="Loading" :loading="alarmListLoading"></Loading>
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
    this.chartSettings = {
      labelMap: {
        yesterday: "昨日",
        today: "今日"
      }
    };
    return {
      alarmListLoading: true,
      page: {
        index: 0,
        size: 10
      },
      alarmList: [],
      powerChartData: {
        columns: ["time", "yesterday", "today"],
        rows: []
      },
      electricityChartData: {
        columns: ["time", "yesterday", "today"],
        rows: []
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    getPowerData() {
      this.$api.dashboard.getPowerData().then(result => {
        let todayPowerArray = [],
          todayElectricityArray = [];
        let yesterdayPowerArray = [],
          yesterdayElectricityArray = [];

        result.data.todayRealTimeData.reverse();
        result.data.todayRealTimeData.forEach(currentItem => {
          todayPowerArray.push(currentItem.totalPointPower);
          todayElectricityArray.push(currentItem.totalPointElectricity);
        });
        result.data.yesterdayRealTimeData.forEach(currentItem => {
          yesterdayPowerArray.push(currentItem.totalPointPower);
          yesterdayElectricityArray.push(currentItem.totalPointElectricity);
        });
        let powerArray = [],
          electricityArray = [];
        for (
          let index = 0;
          index < result.data.todayRealTimeData.length;
          index++
        ) {
          let powerData = {
            time: this.$formatDate(
              result.data.todayRealTimeData[index].dataTime
            ),
            yesterday: yesterdayPowerArray[index],
            today: todayPowerArray[index]
          };
          powerArray.push(powerData);

          let electricityData = {
            time: this.$formatDate(
              result.data.todayRealTimeData[index].dataTime
            ),
            yesterday: yesterdayElectricityArray[index],
            today: todayElectricityArray[index]
          };
          electricityArray.push(electricityData);
        }
        this.powerChartData.rows = powerArray;
        this.electricityChartData.rows = electricityArray;
      });
    },
    getAlarmData() {
      this.$api.alarm.getAlarmData(this.page).then(result => {
        this.alarmListLoading = false;
        this.alarmList = result.data.records;
      });
    }
  },
  mounted() {
    this.getPowerData();
    this.getAlarmData();
  }
};
</script>
<style lang="less" scoped>
.dashboard {
}
</style>