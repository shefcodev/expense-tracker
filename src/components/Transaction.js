import { useContext } from 'react';
import { globalContext } from '../context/store';

export const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useContext(globalContext);

  const deleteTransactionHandler = () => {
    deleteTransaction(id);
  };

  const sign = amount < 0 ? '-' : '+';

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        {sign === '-' ? `${sign}$${Math.abs(amount)}` : `$${Math.abs(amount)}`}
      </span>
      <button className='delete-btn' onClick={deleteTransactionHandler}>
        x
      </button>
    </li>
  );
};
