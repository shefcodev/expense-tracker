import { Fragment, useContext } from 'react';
import { globalContext } from '../context/store';

export const Balance = () => {
  const { transactions } = useContext(globalContext);

  const balance = transactions.reduce((total, { amount }) => total + amount, 0);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>
        {balance < 0
          ? `-$${Math.abs(balance).toFixed(2)}`
          : `$${balance.toFixed(2)}`}
      </h1>
    </Fragment>
  );
};

export default Balance;
