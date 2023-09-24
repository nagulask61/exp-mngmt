import { useState } from "react";
import "./App.css";
import Expense from "./expense/Expense";
import NewExpense from "./expense/new/NewExpense";
import { ExpenseData } from "./assets/data/ExpensesData";

function App() {
  //const expenses = ExpenseData;
  const [allExpenses, setallExpenses] = useState(ExpenseData);

  const newExpenseApp = (exp) => {
    setallExpenses([...allExpenses, exp]);
  };

  return (
    <div className="App">
      <NewExpense newExpenseApp={newExpenseApp} />
           
      <Expense expenses={allExpenses} />
    </div>
  );
}

export default App;
