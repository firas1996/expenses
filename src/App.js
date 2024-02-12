import { useState } from "react";
import AddExpenses from "./components/AddExpenses";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";

const expensesData = [
  {
    id: 1,
    title: "New TV",
    price: 1234,
    date: new Date(2023, 5, 7),
  },
  {
    id: 2,
    title: "Education",
    price: 5999,
    date: new Date(2024, 8, 17),
  },
  {
    id: 3,
    title: "Voyage",
    price: 2500,
    date: new Date(2023, 10, 23),
  },
];
function App() {
  const [expenses, setExpenses] = useState(expensesData);
  const getData = (data) => {
    setExpenses((prevState) => {
      return [data, ...expenses];
    });
  };
  console.log(expenses);
  return (
    <div>
      <AddExpenses getData={getData} />
      <ExpensesContainer expensesData={expenses} />
    </div>
  );
}

export default App;
