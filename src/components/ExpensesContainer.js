import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Chart from "./Chart/Chart";
import ChartData from "./Chart/ChartData";

const ExpensesContainer = ({ expensesData }) => {
  let years = new Set(expensesData.map((item) => item.date.getFullYear()));
  const newAr = [...years].sort();
  const [filterValue, setFilterValue] = useState(newAr[0]);

  // console.log(newAr);

  const filtredExpenses = expensesData.filter((item) => {
    return item.date.getFullYear() == filterValue;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        opts={newAr}
        val={filterValue}
        trackChanges={setFilterValue}
      />
      <ChartData expenses={filtredExpenses} />
      {filtredExpenses.map((expense) => {
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
