import React from 'react'
import "./filterExpense.css"
import Expense from './Expense'

export default function FilterExpenseList(props) {

    if(props.items.length===0){
        return <h2 className='expenses-list__fallback'> No Expenses Found</h2>
    }
  return (
    <ul className='expenses-list'>
          {
        props.items.map((expense) => (
          <Expense
          key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        ))
       
        }
    </ul>
  )
}
