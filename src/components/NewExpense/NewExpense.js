import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import React,{useState} from 'react';
import './ExpenseForm.css';

const NewExpense = (props) => {
    const [showForm,setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() 
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowForm(false);
    }
    const clickHandler = ()=>{
        setShowForm(!showForm);
    }

    return (
        (<div> 

        {(showForm===true)?
            (<div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  />    
    </div>):
       ( <div className='new-expense'>
    <button onClick={clickHandler}>Add New Expense</button>
    </div>)}
         
    </div>)
    )
}

export default NewExpense;