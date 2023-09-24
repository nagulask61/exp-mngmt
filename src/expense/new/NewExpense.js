import React from "react";

import ExpenseForm from "../form/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseAdded = (exp) => {
    props.newExpenseApp({title:exp.enteredTitle,amount:exp.enteredAmount,date:new Date(exp.enteredDate)});
  };

  return (
    <div className="new-expense">
      <ExpenseForm newExpenseAdded={newExpenseAdded} />
    </div>
  );
};

export default NewExpense;
