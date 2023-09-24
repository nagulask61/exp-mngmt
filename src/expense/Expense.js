import React from "react";
import ExpenseItem from "./item/ExpenseItem";
import ExpenseFilter from './filter/ExpenseFilter';

import "./Expense.css";
import { useState } from "react";

const Expense = ({expenses}) => {
  
  const [selectedValue,setSelectedValue]=useState('2020');

  const selectedValueChnaged=(value)=>{
    setSelectedValue(value);
  }

  return (
   
       <div className="expenses">
        <ExpenseFilter selected={selectedValue} selectedValueChnaged={selectedValueChnaged}></ExpenseFilter>
      {expenses.map((item,idx)=>(
      <ExpenseItem exp={item} key={idx}></ExpenseItem>))}
      </div>
    
      // <ExpenseItem exp={expenses[0]}></ExpenseItem>
      // <ExpenseItem exp={expenses[1]}></ExpenseItem>
      // <ExpenseItem exp={expenses[2]}></ExpenseItem>{" "}
    
  )
}
export default Expense;
