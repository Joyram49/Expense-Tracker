import React, { createContext, useReducer } from "react";
import { Appreducer } from "./reducer";

const initialState = {
  transactions: [
    { id: 1, text: "books", amount: -100 },
    { id: 2, text: "salary", amount: +600 },
    { id: 3, text: "notepad", amount: -50 },
    { id: 4, text: "bonus", amount: +300 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
