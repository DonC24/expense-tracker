import React, { useState } from 'react'

export const NewTransaction = () => {
    const [TransactionName, setTransactionName] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form id="form">
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
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
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
