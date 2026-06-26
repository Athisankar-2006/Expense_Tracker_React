
import { useState,useEffect } from "react";
import { getTotalIncome,getTotalExpense,getbalance } from "../Service/ExpenseService";

function Dashboard(){

const [Texpense,setTexpense]=useState(0);
const [Tincome,setTincome]=useState(0);
const [Tbalance,setTbalance]=useState(0);

useEffect(()=>{
  loadData();
  },[])

const loadData=async()=>{
    const exp=await getTotalExpense();
    const inc=await getTotalIncome();
    const bal=await getbalance();

    setTexpense(exp.data);
    setTincome(inc.data);
    setTbalance(bal.data);
  }


    return(

        <>

        <div className="dash">
  
            <h2>Dashboard</h2>
            <h3>Total Expense:{Texpense}</h3>
            <h3>Total Income:{Tincome}</h3>
            <h3>balance:{Tbalance}</h3>
        </div>
        
    
        </>
    );

}
export default Dashboard;