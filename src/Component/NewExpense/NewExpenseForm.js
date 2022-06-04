import React, { useState } from "react";
import "./NewExpenseform.css";

export default function NewExpenseForm(props) {


     const [title,setTitle]=useState('')
     const [amount,setAmount]=useState('')
     const [date,setDate]=useState('')
     const [inForm, setinForm] = useState(false);
    

  // const [data, setData] = useState({
  //   title: "",
  //   Amount: "",
  //   Date: "",
  // });

  const titlehandler = (event) => {
    setTitle(event.target.value)
    // setData({
    //     ...data,
    //     title:event.target.vlaue
    // })

    // setData((prevState) => {
    //   return {
    //     ...data,
    //     title: event.target.vlaue,
    //   };
    // });
  };
  const AmountHandler = (event) => {
    setAmount(event.target.value)
    //   setData({
    //     ...data,
    //     Amount:event.target.vlaue
    // })

    // setData((prevState) => {
    //   return {
    //     ...data,
    //     Amount: event.target.vlaue,
    //   };
    // });
  };
  const DateHandler = (event) => {
    setDate(event.target.value)
    // setData({
    //   ...data,
    //   Date: event.target.vlaue,
    // });
  };


  const handleSubmit=(event)=>{
    event.preventDefault();
     const expense={
       title,
       amount:+amount,
       date:new Date(date)
     }
    //  console.log("form",Date)
    if(title==="" && amount===''&& date===''){
      return;
    }
    props.onSaveFormsubmit(expense);

    //  two way binding 
     setTitle("");
     setAmount('');
     setDate('');
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"  value={title} onChange={titlehandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min='0.01' step='0.01' value={amount} onChange={AmountHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="Date" min='2019-01-01' max='2022-12-31' value={date} onChange={DateHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel} >Cancel</button>
          <button type="submit">Add new Expense</button>
        </div>
      </form>
    </div>
  );
}
