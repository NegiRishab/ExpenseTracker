import { useState } from "react";
import ExpenseFilter from "./Component/ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./Component/Expenses/ExpenseChart";
// import Expense from "./Component/Expenses/Expense";
import FilterExpenseList from "./Component/Expenses/FilterExpenseList";
import NewExpense from "./Component/NewExpense/NewExpense";
import Card from "./Component/util/Card";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

 const[expenses,setexpenses]= useState(dummy)

  const getSaveDAta = (expense) => {
    setexpenses((prestate)=>{
      return [expense, ...prestate]
    })
    // console.log(expenses)
  };


  const [dropdownvalue, setdropdownvalue] = useState("2020");
  const handledropdown = (dropdownData) => {
    setdropdownvalue(dropdownData);
  };


  const Filtterarray=expenses.filter((item)=>{
    return item.date.getFullYear().toString()===dropdownvalue
  })

  return (
    <div>
      <NewExpense onGetSaveExpenseData={getSaveDAta} />
      <Card className="expenses">
        <ExpenseFilter
          selected={dropdownvalue}
          onSaveDropdown={handledropdown}
        />
        <ExpenseChart expenses={Filtterarray}/>
        {/* {console.log(expenses[0].date.getFullYear())} */}
        <FilterExpenseList items={Filtterarray}/>

    
      </Card>
    </div>
  );
}

export default App;
