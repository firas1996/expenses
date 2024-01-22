import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const day = date.toLocaleString("ar-EG", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
