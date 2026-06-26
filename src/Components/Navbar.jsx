import { Link } from "react-router-dom";

function Navbar(){
  return(
  <>
  <h2> expense tracker</h2>
  <Link to={"/"}>DashBoard</Link>
  <Link to={"/add-expense"}>Add Expense</Link>
  <Link to={"/category"}>Categories</Link>
  
  </>

  );


}


export default Navbar;