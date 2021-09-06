import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">Found no expenses.</p>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          className="expenses-list"
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
