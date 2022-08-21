import React  from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const deleteItemHander = ()=>{
    // console.log(props.itemId);
    props.onDeleteItem(props.itemId);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={deleteItemHander}>Remove</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
