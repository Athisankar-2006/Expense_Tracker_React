import axios from "axios";

const BASE_URL="http://localhost:8080/api/categories/"


export const getAllCategory=()=>{
   return axios.get(BASE_URL);
}

export const addCategory=(category)=>{
   return axios.post(BASE_URL,category);
}


export const deleteCategory=(id)=>{
   return axios.delete(`${BASE_URL}{id}`);
}

