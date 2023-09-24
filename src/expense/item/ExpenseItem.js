import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../date/ExpenseDate";

const ExpenseItem = (props) => {
  const { title, date, amount } = { ...props.exp };

  return (
    <article className="expense-item">
      {/* <div>{date.toISOString()}</div> */}
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </article>
  );
};

export default ExpenseItem;
