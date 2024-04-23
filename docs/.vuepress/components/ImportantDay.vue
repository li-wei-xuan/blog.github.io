<template>
  <div>
    <!-- <h4>重要日子</h4> -->
    <div ref="mainRef" style="width: 100%; height: 400px"></div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, reactive, toRefs } from 'vue';
import * as echarts from "echarts";

const mounth = ref([
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
])
const chartData = reactive({
  type: "line",
  color: "red",
  data: {
    "2020": [30, 25, 20, 21, 28, 23, 25, 10, 21, 22, 26, 1],
    "2021": [10, 14, 28, 25, 24, 5, 8, 10, 15, 15, 13, 20],
    "2022": [18, 1, 10, 19, 16, 8, 15, 13, 15, 15, 19, 22],
    "2023": [21, 19, 23, 29, 31, 1, 2, 15, 17, 18, 23, 22],
    "2024": [25, 0, 5, 8],
  }
});

// 使用ref创建响应式引用
const series = ref([]);
const dateList = ref([]);
const mainRef = ref(null); // 创建一个ref来引用模板中的DOM元素

// 在mounted和beforeUnmount生命周期钩子中注册和移除事件监听器
onMounted(() => {
  window.addEventListener("resize", () => {
    echarts.init(mainRef.value).resize();
  });
  changeData(chartData);
  getChart();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize");
});

function changeData({ type, color, data }) {
  dateList.value = Object.keys(data);
  series.value = dateList.value.map((v, i) => ({
    name: v,
    type,
    ...(i === dateList.value.length - 1 && { color }),
    data: data[v],
  }));
}

function getChart() {
  let myChart = echarts.init(mainRef.value);
  var option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: dateList.value,
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
      data: mounth.value,
    },
    yAxis: {
      type: "value",
    },
    series: series.value
  };

  myChart.setOption(option);
}

</script>
