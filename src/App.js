
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/transactionList';
import { NewTransaction } from './components/newTransaction';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
