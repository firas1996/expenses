import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";

function App() {
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
  return (
    <div>
      <ExpensesContainer expensesData={expensesData} />
    </div>
  );
}

export default App;
