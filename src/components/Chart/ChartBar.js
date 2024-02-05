import "./ChartBar.css";

const ChartBar = ({ label, value, max, total }) => {
  let barFillHeight = "0%";
  barFillHeight = (value / max) * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
