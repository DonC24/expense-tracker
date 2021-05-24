import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State - dummy info
const initialState = [
    {id: 1, TransactionName: "Salary", amount: 2345, type: "income", createdDate: "2021-03-02T05:01:50.389Z"},
    {id: 2, TransactionName: "Family meal", amount: -200, type: "expense", createdDate: "2021-03-02T09:38:50.389Z"},
    {id: 3, TransactionName: "Lunch", amount: -5, type: "expense", createdDate: "2021-03-12T05:12:50.389Z"},
    {id: 4, TransactionName: "Salary", amount: 2345, type: "income", createdDate: "2021-04-02T05:42:50.389Z"},
    {id: 5, TransactionName: "Pay phone bill", amount: -35, type: "expense", createdDate: "2021-04-21T05:20:50.389Z"},
    {id: 6, TransactionName: "Lunch", amount: -23, type: "expense", createdDate: "2021-04-22T05:31:50.389Z"}
];


let strInitialState = JSON.stringify(initialState);
localStorage.setItem('transactions', strInitialState);

const localState = JSON.parse(localStorage.getItem("transactions")) || [];

//Create ConTransactionName
//export const GlobalContext = createContext(initialState);
export const GlobalContext = createContext(localState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, localState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider 
    value={{
        //transactions: state.transactions,
        transactions: state,
        addTransaction,
        deleteTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}