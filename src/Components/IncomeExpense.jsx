import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div className='income'>
        <h4>income</h4>
        <h2>${income}</h2>
      </div>
      <div className='expense'>
        <h4>Expense</h4>
        <h2>${expense}</h2>
      </div>
    </div>
  );
};
