import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expForm, setExpForm] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });

  const inputChangeHandler = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    if (id === "title") {
      setExpForm(() => ({ ...expForm, enteredTitle: value }));
    } else if (id === "amount") {
      setExpForm(() => ({ ...expForm, enteredAmount: value }));
    } else {
      setExpForm(() => ({ ...expForm, enteredDate: value }));
    }

    // console.log("id: " + event.target.id + " value : " + event.target.value);
  };

  const expenseSubmitHandler = (event) => {
    props.newExpenseAdded(expForm);
    event.preventDefault();
  };

  return (
    <form onSubmit={expenseSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expForm.enteredTitle}
            id="title"
            onChange={(event) => {
              inputChangeHandler(event);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            value={expForm.enteredAmount}
            onChange={(event) => {
              inputChangeHandler(event);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            value={expForm.enteredDate}
            onChange={(event) => {
              inputChangeHandler(event);
            }}
          />
        </div>
      </div>
      <div className="new-expense__reset">
        <button type="button" className="new-expense__reset" onClick={()=>{setExpForm(()=>(
            {enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''})
            )}}>Reset Expense</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
