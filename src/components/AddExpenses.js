import { useState } from "react";
import "./AddExpenses.css";

const AddExpenses = ({ getData }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  // const titleChanger = (event) => {
  //   // setTitle(event.target.value);
  //   setInputs({ ...inputs, title: event.target.value });
  // };
  // const priceChanger = (event) => {
  //   // setPrice(event.target.value);
  //   setInputs({ ...inputs, price: event.target.value });
  // };
  // const dateChanger = (event) => {
  //   // setDate(event.target.value);
  //   setInputs({ ...inputs, date: event.target.value });
  // };
  const handelAll = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(title);
    // console.log(price);
    // console.log(date);
    getData({
      id: Math.random(),
      title: inputs.title,
      price: inputs.price,
      date: new Date(inputs.date),
    });
    // setTitle("");
    // setPrice("");
    // setDate("");
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              name="title"
              placeholder="Title"
              onChange={handelAll}
              value={inputs.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              name="price"
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              onChange={handelAll}
              value={inputs.price}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              name="date"
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={handelAll}
              value={inputs.date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenses;
