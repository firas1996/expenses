import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, price, date }) => {
  const [newTitle, setNewTitle] = useState(title);
  const updateTitle = () => {
    console.log(newTitle);
    setNewTitle("abc");
    console.log(newTitle);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <button onClick={updateTitle}>Update Title</button>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
