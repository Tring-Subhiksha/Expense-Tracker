import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import Overview  from './Overview'
import Transaction from './Transaction'

const Header = () => {
  const[Expense,setExpense]=useState(0);
  const[Income,setIncome]=useState(0);
  const[Transactions,setTransactions]=useState([]);


  const addTransaction=(payload)=>{
      const TransactionArray=[...Transactions];
      TransactionArray.push(payload);
      setTransactions(TransactionArray);
  }


  const CalculateBalance=()=>{
    let expense=0;
    let income=0;
    Transactions.map((payload)=>{
      payload.type==="Expense"?(expense=expense+payload.isAmount):(income=income+payload.isAmount);
    });
    setExpense(expense);
    setIncome(income);
  };


  useEffect(()=>CalculateBalance(),[Transactions]);

  
  return (
    <div> 
    <div className='container'>
      Express Tracker
      </div>
      <Overview addTransaction={addTransaction} Expense={Expense} Income={Income}/>
      <Transaction Transactions={Transactions}/>
      </div>
  )
}

export default Header
