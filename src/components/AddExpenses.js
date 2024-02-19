import { useState } from "react";
import "./AddExpenses.css";
import NewExpenseForm from "./NewExpenseForm";

const AddExpenses = ({ getData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="new-expense">
      {isOpen ? (
        <NewExpenseForm toggleForm={toggleForm} getData={getData} />
      ) : (
        <button onClick={toggleForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpenses;
