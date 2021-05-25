import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { format } from 'date-fns';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function longerArray(a, b) {
  if (a.length > b.length || a.length === b.length){
    return a.length;
  } else if (b.length > a.length){
    return b.length;
  }
}

export const Chart = () => {

    const { transactions } = useContext(GlobalContext);
    
    let monthlyIncome = transactions.filter(item => item.amount > 0)
    .reduce((months, item) => {
      let dateObj = new Date(item.createdDate);
      let monthyear = format(dateObj, 'MMM-yyyy');
      if(!months[monthyear]){
        months[monthyear] = {month: monthyear, income: item.amount};
      } else {
        months[monthyear].income += item.amount;
      }
      return months;
    }, {});

    let monthlyExpense = transactions.filter(item => item.amount < 0)
    .reduce((months, item) => {
      let dateObj = new Date(item.createdDate);
      let monthyear = format(dateObj, 'MMM-yyyy');
      if(!months[monthyear]){
        months[monthyear] = {month: monthyear, expense: (item.amount * -1)}
      } else {
        months[monthyear].expense += (item.amount * -1);
      }
      return months;
    }, {});

    let valsIncome = Object.values(monthlyIncome); //get values (object) of each month in an array
    let valsExpense = Object.values(monthlyExpense);
    let monthlyAcc = [];
    let arrLength = longerArray(valsIncome, valsExpense); //compare which array is longer, get length

    //merge monthly income and expense into object for chart
    for (let i = 0; i < arrLength; i++){
      let entries = {
        ...valsIncome[i],
        ...valsExpense[i]
      }
      monthlyAcc.push(entries);
    }
    //console.log (monthlyAcc);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={monthlyAcc}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#c0392b" />
          <Bar dataKey="income" fill="#2ecc71" />
        </BarChart>
      </ResponsiveContainer>
    );
}
