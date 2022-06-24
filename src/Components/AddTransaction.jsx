import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    // console.log(AddTransaction);
    addTransaction(newTransaction);
  };

  return (
    <div className='add-transaction'>
      <h4>Add New Transaction</h4>
      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter type....'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            <span>(negative-expense, positive-income)</span>
          </label>
          <input
            type='number'
            placeholder='Enter amount....'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type='submit' className='submit-btn'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};
