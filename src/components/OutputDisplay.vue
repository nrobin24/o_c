<template>
  <BasePanel panel-label="Output Display">
    <template v-slot:body>
      <apexchart
        width="700"
        height="200"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </template>
  </BasePanel>
</template>

<script>
import BasePanel from "./BasePanel";

export default {
  name: "OutputDisplay",
  components: {
    BasePanel,
  },
  data: function() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        tooltip: {
          fixed: {
            enabled: false,
            position: "topRight",
          },
        },
      },
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
    };
  },
};
</script>
