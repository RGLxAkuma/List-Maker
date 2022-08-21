import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const deleteItemHandlerList = (data) => {
    // console.log(data);
    props.onDeleteExpense(data);
  };
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          onDeleteItem={deleteItemHandlerList}
          key={expense.id}
          itemId={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
