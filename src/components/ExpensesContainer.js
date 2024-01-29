import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesContainer = ({ expensesData }) => {
  let years = new Set(expensesData.map((item) => item.date.getFullYear()));
  const newAr = [...years].sort();
  const [filterValue, setFilterValue] = useState(newAr[0]);

  // console.log(newAr);
  return (
    <div className="expenses">
      <ExpensesFilter
        opts={newAr}
        val={filterValue}
        trackChanges={setFilterValue}
      />
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            // key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
