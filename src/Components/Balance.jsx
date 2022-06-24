import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((acc, currentInd) => (acc += currentInd), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h2>${total}</h2>
    </>
  );
};

export default Balance;
