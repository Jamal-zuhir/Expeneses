import React, { useState } from "react";
import '../resourses/custom.css'
import From from "../components/Form.js"
import Table from '../components/Table'

const App = () => {
    const [expenses, setExpense] = useState([]);

    const callbackExpenseForm = (item) => {
        setExpense((prev) => (
            [item, ...prev]
        )   
            )
    } 
    const deleteExpense = (expense) => {
      const newArray = expenses.filter((item) => (
          expense.title !== item.title
      ))
      setExpense(newArray);
    }
  return (
    <>
      <div className="container mt-5">
        <From callbackExpenseForm={callbackExpenseForm}/>
        <Table expenseData={expenses} deleteExpense={deleteExpense}/>
      </div>
    </>
  );
};

export default App;
