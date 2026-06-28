import CategoryForm from "./Components/CategoryForm";
import ExpenseForm from "./Components/ExpenseForm";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App(){


    return(

    <>
    <BrowserRouter>
    <Navbar/>
    
     <Routes>

      <Route
         path="/"
         element={<Home/>}
      />
       
        <Route
         path="/add-expense"
         element={<ExpenseForm/>}
      />

       <Route
         path="/categories"
         element={<CategoryForm/>}
      />

     </Routes>

    </BrowserRouter>



    </>

    );
}
export default App;