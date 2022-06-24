import React from "react";
import "./App.css";
import Balance from "./Components/Balance";
import { Header } from "./Components/Header";
import { IncomeExpense } from "./Components/IncomeExpense";
import { TransactionList } from "./Components/TransactionList";
import { AddTransaction } from "./Components/AddTransaction";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
