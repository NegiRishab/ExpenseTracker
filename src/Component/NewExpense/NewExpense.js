import React, { useState } from "react";

import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const SaveDropdown = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    // console.log("form2",expense.Date)
    props.onGetSaveExpenseData(expenseData);
    setinForm(false)
    // console.log( "NewExpense",expenseData);
  };


  const [inForm, setinForm] = useState(false);
  const handleinForm = () => {
    setinForm(true);
  };
  const SaveCancel=()=>{
    setinForm(false)
  }
  return (
    <div className="new-expense">
      {inForm ? (
        <NewExpenseForm onSaveFormsubmit={SaveDropdown}  onCancel={SaveCancel}/>
      ) : (
        <button onClick={handleinForm}>Add New Expenses</button>
      )}
    </div>
  );
}
