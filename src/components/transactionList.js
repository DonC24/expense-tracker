import React, { useContext } from 'react'
import { Transaction } from './transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <h3>Transaction History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => 
                    <Transaction 
                    key={transaction.id} 
                    transaction={transaction} />)}
            </ul>
        </React.Fragment>
    )
}
