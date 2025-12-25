import date from '../css/Date.module.css';

function Dates({ month, day, clickDate }) {
    return (
        <div className={date.date_ct} onClick={() => clickDate(day)}>
            {month}.{day}
        </div>
    )
}

export default Dates;