import React from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../util/Card";


export default function Expense(props) {
  const {title,  amount, date } = props;



  // console.log( " expense.js",props)
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title} </h2>{" "}
      </div>
      <div className="expense-item__price">{amount}</div>
      
    </Card>
  );
}
