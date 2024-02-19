import { Fragment, useContext } from 'react';
import { globalContext } from '../context/store';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(globalContext);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(({ id, text, amount }) => (
          <Transaction key={id} id={id} text={text} amount={amount} />
        ))}
      </ul>
    </Fragment>
  );
};
