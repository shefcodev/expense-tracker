import { Fragment } from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalContextProvider } from './context/store';
import './App.css';

function App() {
  return (
    <Fragment>
      <GlobalContextProvider>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalContextProvider>
    </Fragment>
  );
}

export default App;
