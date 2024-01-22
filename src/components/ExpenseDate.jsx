import React from "react";

const ExpenseDate = () => {
  const year = date.getFullYear();
  const day = date.toLocaleString("ar-EG", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
