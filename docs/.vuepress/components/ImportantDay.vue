<template>
  <div>
    <!-- <h4>重要日子</h4> -->
    <div ref="main" id="main" style="width: 100%; height: 400px"></div>
  </div>
</template>
  
<script>
import * as echarts from "echarts";
export default {
  created() {
    this.$nextTick(function () {
      this.demo();
    });
  },
  mounted() {
    window.addEventListener("resize", function () {
      echarts.init(document.getElementById("main")).resize();
    });
  },
  methods: {
    demo() {
      let myChart = echarts.init(document.getElementById("main"));
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["2020", "2021", "2022", "2023"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "2020",
            type: "line",
            data: [30, 25, 20, 21, 28, 23, 25, 10, 21, 22, 26, 1],
          },
          {
            name: "2021",
            type: "line",
            data: [10, 14, 28, 25, 24, 5, 8, 10, 15, 15, 13, 20],
          },
          {
            name: "2022",
            type: "line",
            data: [18, 1, 10, 19, 16, 8, 15, 13, 15, 15, 19, 22],
          },
          {
            name: "2023",
            type: "line",
            data: [21, 19, 23, 29, 31, 1, 2, 15],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
  