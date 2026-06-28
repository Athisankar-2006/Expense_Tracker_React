import { useState } from "react";
import { addExpense } from "../Service/ExpenseService";



function ExpenseForm(){


    const [expense,setExpense]=useState({

        title:"",
        amount:"",
        type:"EXPENSE",
       description:"",
        date:""
    })

    const handleChange = (e) => {
      setExpense({
        ...expense,
        [e.target.name]:e.target.value
      });
  };


  const handleSubmit=async(e)=>{
    
    e.preventDefault();
    await addExpense(expense);

    alert("expense added");


    setExpense({
        
        title:"",
        amount:"",
        type:"EXPENSE",
       description:"",
        date:""

    })
  }

  console.log("Expense payload:", expense);

    
    return(

        <>
             <form onSubmit={handleSubmit}>


                <input 
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={expense.title} 
                />



                <input 
                name="amount"
                type="number"
                placeholder="Amount"
                onChange={handleChange}
                value={expense.amount} 
                />

                
               
               <select
                name="type" 
                onChange={handleChange}
                value={expense.type}
                >

                    <option value="EXPENSE">Expense</option>
                    <option value="INCOME">Income</option>
                </select>

                
                <input 
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={expense.description} 
                />

                
                <input 
                name="date"
                type="date"
                placeholder="Date"
                onChange={handleChange}
                value={expense.date} 
                />

                <button>Add</button>

             </form>



        </>
    )

}

export default ExpenseForm;