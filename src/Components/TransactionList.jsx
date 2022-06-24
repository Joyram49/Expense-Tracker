import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className='transaction'>
      <h4>History</h4>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
