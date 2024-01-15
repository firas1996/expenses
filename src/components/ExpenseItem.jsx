import "./ExpenseItem.css";
const ExpenseItem = ({ title, price, date }) => {
  const year = date.getFullYear();
  const day = date.toLocaleString("ar-EG", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
