import './ExpenseDate.css';
function ExpenseDate(props){

    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
    return(
        <><div>{month}</div><div>{year}</div><div>{day}</div></>
    )

}

export default ExpenseDate;