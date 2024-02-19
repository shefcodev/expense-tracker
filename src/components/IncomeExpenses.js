import { useContext } from 'react';
import { globalContext } from '../context/store';

export const IncomeExpenses = () => {
  const { transactions } = useContext(globalContext);

  const expensesList = transactions.filter(({ amount }) => amount < 0);
  const incomeList = transactions.filter(({ amount }) => amount > 0);

  const expenses = Math.abs(
    expensesList.reduce((total, { amount }) => total + amount, 0)
  );

  const income = Math.abs(
    incomeList.reduce((total, { amount }) => total + amount, 0)
  );

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className='money minus'>${expenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
