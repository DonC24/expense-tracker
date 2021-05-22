import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import { format } from 'date-fns';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    let date = format(transaction.createdDate, "dd MMM yyyy hh:mm aaa");

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <span>{transaction.TransactionName}</span>
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <div class="break"></div>
            <span>Created: {date}</span>
            <button onClick={() => 
                deleteTransaction(transaction.id)} 
                className="delete-btn">x</button>
        </li>
    )
}
