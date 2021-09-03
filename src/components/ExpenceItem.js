import "./ExpenceItem.css";

function ExpenceItem() {
  return (
    <div className="expense-item">
      <div>Data</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
