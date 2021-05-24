
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/transactionList';
import { NewTransaction } from './components/newTransaction';
import { Chart } from './components/chart';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <div id="chart-container" style={{height: 500+"px"}}>
          <Chart />
        </div>
        
        <TransactionList />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
