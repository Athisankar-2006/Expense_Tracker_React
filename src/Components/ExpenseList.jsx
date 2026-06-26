import { useState,useEffect } from "react";
import { getAllExpense,deleteExpense } from "../Service/ExpenseService";


function ExpenseList(){

    const [expense,setExpense]=useState([]);

    useEffect(()=>{
        loadExpense();
    },[])

    const loadExpense=async()=>{
        const ex=await getAllExpense();
        setExpense(ex.data);
    }
    //    console.log(expense)

   const deletebtn=async(id)=>{
    console.log(id);
      await deleteExpense(id);
       loadExpense();
   }
return(

    <>
    
<h2>Expense List</h2>
   <table border="1">
        <thead>
            <tr>
                <th>Serial no</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {
              
              expense.map(ex=>(

               <tr key={ex.id}>
                
                <td>{ex.id}</td>
                <td>{ex.title}</td>
                <td>{ex.amount}</td>
                <td>{ex.type}</td>
                <td>{ex.date}</td>
                <td>
                    <button onClick={()=>{deletebtn(ex.id)}}>Delete</button>
                </td>

            </tr>


              ))
            }
          


        </tbody>

   </table>


    </>
);

}

export default ExpenseList;