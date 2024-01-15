import ExpenseItem from "./components/ExpenseItem";

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
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </div>
  );
}

export default App;
