import Chart from "./Chart";

const ChartData = ({ expenses }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Avr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const x of expenses) {
    chartData[x.date.getMonth()].value += x.price;
  }
  //   console.log(chartData);
  return <Chart data={chartData} />;
};
export default ChartData;
