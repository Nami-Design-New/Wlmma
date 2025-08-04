import Chart from "react-apexcharts";

export default function DashboardCharts() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const sharedOptions = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: "#8d8d8d",
      fontFamily: "inherit",
    },
    grid: {
      borderColor: "#e0e0e0",
      row: { colors: ["#fafafa", "transparent"], opacity: 0.5 },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    legend: {
      position: "top",
      labels: { colors: "#8d8d8d" },
    },
    xaxis: {
      categories: months,
      labels: {
        rotate: -45,
        style: { colors: "#8d8d8d", fontSize: "12px" },
      },
    },
    yaxis: {
      labels: { style: { colors: "#8d8d8d", fontSize: "12px" } },
    },
  };

  const userGrowth = {
    series: [
      {
        name: "All Users",
        data: [
          2000, 2100, 2300, 2450, 2600, 2750, 2847, 2900, 3000, 3100, 3200,
          3300,
        ],
      },
      {
        name: "Service Providers",
        data: [150, 180, 200, 220, 230, 240, 253, 260, 270, 280, 290, 300],
      },
    ],
    options: {
      ...sharedOptions,
      chart: { ...sharedOptions.chart, type: "line" },
      colors: ["#f05b4e", "#0d9595"],
    },
  };

  const reservationsOverview = {
    series: [
      {
        name: "Bookings",
        data: [44, 55, 57, 56, 61, 58, 63, 62, 66, 69, 72, 75],
      },
    ],
    options: {
      ...sharedOptions,
      chart: {
        ...sharedOptions.chart,
        type: "bar",
      },

      colors: ["#0d9595"],
    },
  };

  const toolOrders = {
    series: [
      {
        name: "Tool Orders",
        data: [23, 33, 45, 32, 67, 78, 88, 55, 42, 90, 75, 59],
      },
    ],
    options: {
      ...sharedOptions,
      chart: { ...sharedOptions.chart, type: "bar" },
      colors: ["#faae43"],
    },
  };

  return (
    <div className="charts_area">
      <div className="chart_item full_width">
        <h6>Users Growth Trend</h6>
        <Chart
          options={userGrowth.options}
          series={userGrowth.series}
          type="line"
          height={300}
        />
      </div>

      <div className="chart_row">
        <div className="chart_item">
          <h6>Monthly Reservations</h6>
          <Chart
            options={reservationsOverview.options}
            series={reservationsOverview.series}
            type="bar"
            height={250}
          />
        </div>

        <div className="chart_item">
          <h6>Tools Orders Trend</h6>
          <Chart
            options={toolOrders.options}
            series={toolOrders.series}
            type="bar"
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
