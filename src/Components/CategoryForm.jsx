
import { useState } from "react";
import { addCategory } from "../Service/CategoryService";

function CategoryForm(){


   const [name,setName] = useState("");

 const submit = async(e) => {

   e.preventDefault();
  try {
    await addCategory({ name });
  } catch (err) {
    console.error(err);
  }

    setName("");
 };



    return(

        <>
         <h2>Category form</h2>
     
       <form onSubmit={submit}>

      <input
      placeholder="Category"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <button>Add</button>

   </form>
        </>

     );
}

export default CategoryForm;





 
