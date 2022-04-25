import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import ExpensesChart from './ExpensesChart.js';

function Expenses(props){
   
   const [filter,setFilter] = useState('2022');

   const filterChangeHandler = (filtervalue) => {
      console.log(filtervalue);
      setFilter(filtervalue);
   };
   const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString()===filter);
    
   return (
    <Card className="expenses">  
    <ExpensesFilter filter = {filter} onFilterChange={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items = {filteredExpenses}/>
   </Card>

); 
}

export default Expenses;