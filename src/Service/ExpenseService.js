import axios from "axios";

const BASE_URL="http://localhost:8080/api/expenses/";


export const getAllExpense=()=>{
    return axios.get(BASE_URL);
}



export const getTotalIncome=()=>{
    return axios.get(`${BASE_URL}total-income`);
}


export const getTotalExpense=()=>{
    return axios.get(`${BASE_URL}total-expense`);
}


export const getbalance=()=>{
    return axios.get(`${BASE_URL}balance`);
}

export const deleteExpense=(id)=>{
    return axios.delete(`${BASE_URL}${id}`)
}