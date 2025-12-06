import '../css/Calender.css';


function CalenderDate({ id, date, month, currentMonth }) {
    const dateClassName = (month === currentMonth) ? 'prev-date-div' : 'current-date-div';

    return (
        <div className={dateClassName}>
            {date}
        </div>
    )
}

export default CalenderDate;