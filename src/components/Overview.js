import React, { useState } from 'react'
import '../styles/Overview.css'

const AddTransactionView = (props) => {
  const [isAmount, setAmount] = useState();
  const [isDesc, setDesc] = useState();
  const [type, setType] = useState("");

  const addTransaction = () => {
    props.addTransaction({ isAmount: Number(isAmount), isDesc, type });
    props.setVisible();
  }
  return (
    <div className='whole'>
      <div className='visible'>
        <input type="number" placeholder='Amount' value={isAmount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder='Description' value={isDesc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div className='radio'>
        <input type="radio" value="Expense" checked={type === "Expense"} onChange={(e) => setType(e.target.value)} /><label for="html">Expense</label>
        <input type="radio" value="Income" checked={type === "Income"} onChange={(e) => setType(e.target.value)} /><label for="html">Income</label>
      </div>
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );
}


const Overview = (props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className='box'>
      <div className='balancebox'>
        <div className='balance'>
          Balance:${props.Income - props.Expense}
        </div>
        <div className='button'>
          <button onClick={() => {
            setVisible(!isVisible)

          }}>
            {isVisible ? "Cancel" : "Add"}
          </button>
        </div>
      </div>
      {isVisible && <AddTransactionView setVisible={setVisible} addTransaction={props.addTransaction} />}
      <div className='expenseorincome'>
        <div className='expense'>
          Expense <span>${props.Expense}</span>
        </div>
        <div className='income'>
          Income <span>${props.Income}</span>
        </div>
      </div>
    </div>
  )
}

export default Overview
