import React, { useState, useContext } from 'react';
import { Transaction } from './transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const [listOrder, setListOrder] = useState('desc');


    let arr;
    if(listOrder === 'asc'){
        arr = transactions.sort(function(a, b) {
            var keyA = new Date(a.createdDate),
              keyB = new Date(b.createdDate);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
    } else {
        arr = transactions.sort(function(a, b) {
            var keyA = new Date(a.createdDate),
              keyB = new Date(b.createdDate);
            // Compare the 2 dates
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        });
    }

    return (
        <React.Fragment>
            <h3>Transaction History</h3>
            <div id="listOrderDiv">
                <label htmlFor="listOrder">List order:</label>
                    <select 
                    id="listOrder" 
                    name="listOrder"
                    value={listOrder}
                    onChange={(e) => setListOrder(e.target.value)}>
                        <option value="desc">Descending Dates</option>
                        <option value="asc">Ascending Dates</option>
                    </select>
            </div>
            <ul id="list" className="list">
                {arr.map(transaction => 
                    <Transaction 
                    key={transaction.id} 
                    transaction={transaction} />)}
            </ul>
        </React.Fragment>
    )
}
