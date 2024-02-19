import { createContext, useReducer } from 'react';
import appReducer from './app-reducer';

const initialState = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

export const globalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const addTransaction = (text, amount) => {
    dispatch({ type: 'ADD', payload: { text, amount } });
  };

  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
