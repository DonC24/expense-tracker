import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const NewTransaction = () => {
    const { transactions } = useContext(GlobalContext);
    const [TransactionName, setTransactionName] = useState('');
    const [expType, setExpType] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        let lastId = 0;
        let newId = 0;
        let expAmount = amount


        if(transactions.length === 0) {
            newId = lastId + 1;
        } else {
            lastId = Math.max.apply(null, transactions.map(item => item.id));
            newId = lastId + 1;
        }

        if(expType === 'minus'){
            expAmount = amount * -1;
        }

        const newTransaction = {
            id: newId,
            TransactionName: TransactionName,
            amount: parseFloat(expAmount)
        }

        addTransaction(newTransaction);

        //clear states
        setTransactionName('');
        setExpType('');
        setAmount(0);

    }

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="transaction-name">Name of Transaction</label>
                <input 
                    type="text" 
                    value={TransactionName}
                    onChange={(e) => setTransactionName(e.target.value)} 
                    id="transaction-name" 
                    placeholder="Enter name of transaction" />
                </div>
                <div className="form-control">
                <label htmlFor="expType">Choose a type:</label>
                    <select 
                    id="expType" 
                    name="expType"
                    //defaultValue="plus"
                    onChange={(e) => setExpType(e.target.value)}>
                        <option value="plus">Income</option>
                        <option value="minus">Expense</option>
                    </select>
                </div>
                <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    </label>
                <input 
                    type="number" 
                    id="amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter amount" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </React.Fragment>
    )
}
