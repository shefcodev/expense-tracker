const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'DELETE':
      const updatedTransations = [...state.transactions].filter(
        ({ id }) => id !== payload
      );

      return { ...state, transactions: updatedTransations };

    case 'ADD':
      const newTransaction = {
        id: state.transactions.length,
        text: payload.text,
        amount: payload.amount,
      };

      const updatedTransactions = [...state.transactions, newTransaction];
      return { ...state, transactions: updatedTransactions };

    default:
      return state;
  }
};

export default appReducer;
