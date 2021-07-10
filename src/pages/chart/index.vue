<template>
  <view>
    <view class="chart-btn">
      <button class="chart-btn-item" @tap="changeChartData(1)">近一月</button>
      <button class="chart-btn-item" @tap="changeChartData(2)">近一季</button>
      <button class="chart-btn-item" @tap="changeChartData(3)">近半年</button>
      <button class="chart-btn-item" @tap="changeChartData(4)">近一年</button>
      <button class="chart-btn-item" @tap="changeChartData(5)">成立以来</button>
    </view>
    <view >
      <canvas class="chart-view" id="chartline" canvas-id="chartline"></canvas>
    </view>
  </view>
</template>

<script>
import Charts from "@/components/chart/wxcharts";
var lineChart = null;
import "./index.less";
export default {
  name: "Index",
  data() {
    return {
      fundManagerName: "",
      drawLine: {},
      optsline: {},
      s: 375,
      chartType: 1
    };
  },
  onShow(){
    this.changeChartData(1)
  },
  methods: {
    OnWxChart(x_data, y_data, name) {
      lineChart = new Charts({
        canvasId: "chartline", //输入wxml中canvas的id
        type: "line",
        categories: x_data, //模拟的x轴横坐标参数
        animation: false, //是否开启动画
        legend: false,
        series: [
          {
            name: name,
            data: y_data,
            format: function(val, name) {
              return val + "元";
            }
          }
        ],
        xAxis: {
          //是否隐藏x轴分割线
          disableGrid: true
        },
        yAxis: {
          //y轴数据
          title: "", //标题
          format: function(val) {
            //返回数值
            return val.toFixed(2);
          },
          gridColor: "#D8D8D8"
        },
        width: 375,
        height: 150,
        dataLabel: false, //是否在图表上直接显示数据
        dataPointShape: false, //是否在图标上显示数据点标志
        extra: {
          lineStyle: "Broken" //曲线
        }
      });
    },
    changeChartData(value) {
      this.chartType = value;
      let x_data = [];
      let y_data = [];
      switch (value) {
        case 1:
          x_data = [
            "04-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "04-20",
            "",
            "",
            "",
            "",
            "",
            "",
            "05-05"
          ];
          y_data = [
            "1.05",
            "1.028",
            "1.025",
            "1.02",
            "1.019",
            "1.042",
            "1.049",
            "1.057",
            "1.053",
            "1.045",
            "1.048",
            "1.037",
            "1.03",
            "1.044",
            "1.074"
          ];
          break;

        case 2:
          x_data = [
            "02-05",
            "",
            "",
            "",
            "",
            "03-05",
            "",
            "",
            "",
            "",
            "",
            "04-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "2021-05-05"
          ];
          y_data = [
            "1.04",
            "1.033",
            "1.028",
            "1.035",
            "1.05",
            "1.028",
            "1.025",
            "1.02",
            "1.019",
            "1.042",
            "1.049",
            "1.057",
            "1.053",
            "1.045",
            "1.048",
            "1.037",
            "1.03",
            "1.044",
            "1.074"
          ];
          break;

        case 3:
          x_data = [
            "2020-11-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2021-03-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2021-05-05"
          ];
          y_data = [
            "1.05",
            "1.052",
            "1.053",
            "1.047",
            "1.04",
            "1.033",
            "1.028",
            "1.035",
            "1.05",
            "1.028",
            "1.025",
            "1.02",
            "1.019",
            "1.042",
            "1.049",
            "1.057",
            "1.053",
            "1.045",
            "1.048",
            "1.037",
            "1.03",
            "1.044",
            "1.074"
          ];
          break;

        case 4:
          x_data = [
            "2020-05-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2020-11-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2021-05-05"
          ];
          y_data = [
            "1.032",
            "1.039",
            "1.038",
            "1.034",
            "1.04",
            "1.039",
            "1.037",
            "1.043",
            "1.041",
            "1.047",
            "1.05",
            "1.052",
            "1.053",
            "1.047",
            "1.04",
            "1.033",
            "1.028",
            "1.035",
            "1.05",
            "1.028",
            "1.025",
            "1.02",
            "1.019",
            "1.042",
            "1.049",
            "1.057",
            "1.053",
            "1.045",
            "1.048",
            "1.037",
            "1.03",
            "1.044",
            "1.074"
          ];
          break;

        case 5:
          x_data = [
            "2020-02-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2020-10-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2021-05-05",
            ""
          ];
          y_data = [
            "1.032",
            "1.039",
            "1.038",
            "1.034",
            "1.04",
            "1.039",
            "1.037",
            "1.032",
            "1.039",
            "1.038",
            "1.034",
            "1.04",
            "1.039",
            "1.037",
            "1.032",
            "1.039",
            "1.038",
            "1.034",
            "1.04",
            "1.039",
            "1.037",
            "1.032",
            "1.039",
            "1.038",
            "1.034",
            "1.04",
            "1.039",
            "1.037",
            "1.043",
            "1.041",
            "1.047",
            "1.05",
            "1.052",
            "1.053",
            "1.047",
            "1.04",
            "1.033",
            "1.028",
            "1.035",
            "1.05",
            "1.028",
            "1.025",
            "1.02",
            "1.019",
            "1.042",
            "1.049",
            "1.057",
            "1.053",
            "1.045",
            "1.048",
            "1.037",
            "1.03",
            "1.044",
            "1.074"
          ];
          break;

        default:
          x_data = [
            "04-05",
            "",
            "",
            "",
            "",
            "",
            "",
            "04-20",
            "",
            "",
            "",
            "",
            "",
            "",
            "05-05"
          ];
          y_data = [
            "1.05",
            "1.028",
            "1.025",
            "1.02",
            "1.019",
            "1.042",
            "1.049",
            "1.057",
            "1.053",
            "1.045",
            "1.048",
            "1.037",
            "1.03",
            "1.044",
            "1.074"
          ];
      }
      //绘制折线图
      this.OnWxChart(x_data, y_data, "图表一");
    }
  }
};
</script>
