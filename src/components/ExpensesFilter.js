import "./ExpensesFilter.css";

const ExpensesFilter = ({ opts, val, trackChanges }) => {
  const filterChangerHandler = (event) => {
    trackChanges(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <label>Filter by Year</label>
      <select value={val} onChange={filterChangerHandler}>
        {opts.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
