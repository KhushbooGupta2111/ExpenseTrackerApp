import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return 
    (
    <div className = 'expense-item'>
            <ExpenseDate date = {props.date} />
      <div></div>
      <div className="expense-item__description"></div>
      <div className="expense-item__price"></div>
    </div>
    );
}


export default ExpenseItem;