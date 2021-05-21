import React, { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

export const TransactionList = () => {
    const context = useContext(GlobalContext);

    console.log(context);

    return (
        <React.Fragment>
            <h3>Transaction History</h3>
            <ul id="list" className="list">
            </ul>
        </React.Fragment>
    )
}
