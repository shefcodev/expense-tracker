import { Fragment, useState, useContext } from 'react';
import { globalContext } from '../context/store';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(globalContext);

  const inputChangeHandler = ({ target: { id, value } }) => {
    if (id === 'text' && !value.split('').some((char) => Number(char))) {
      setText(value);
    }

    if (id === 'amount') {
      setAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    addTransaction(text, +amount);

    setText('');
    setAmount(0);
  };

  return (
    <Fragment>
      <h3>Add New Transaction</h3>
      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            placeholder='Enter text...'
            value={text}
            onChange={inputChangeHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount...'
            value={amount}
            onChange={inputChangeHandler}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </Fragment>
  );
};
