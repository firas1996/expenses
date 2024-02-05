import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
  const values = data.map((item) => item.value);
  console.log(values);
  const max = Math.max(...values);
  const total = values.reduce((a, b) => {
    return a + b;
  });
  console.log(total);
  return (
    <div className="chart">
      {data.map((item) => {
        return (
          <ChartBar
            label={item.label}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
