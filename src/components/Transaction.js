import React from 'react'
import "../styles/Transaction.css"
const TransactionCell = (props) => {

  return (

    <div className={`${props.payload.type === 'Expense' ? 'active' : 'default'}`}>
      <span>{props.payload.isDesc}</span>
      <span>${props.payload.isAmount}</span>
    </div>
  )
}

const Transaction = (props) => {

  return (
    <div className='TransactionCell'>
      {props.Transactions.length ?
        props.Transactions.map((payload) => (<TransactionCell payload={payload} />))
        : ""}


    </div>
  )
}

export default Transaction
