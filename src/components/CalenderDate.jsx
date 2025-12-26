import '../css/Calender.css';

function CalenderDate({ id, date, month, currentMonth, clickDate, isToday, isActive }) {
    // 이번 달인지 아닌지에 따라 기본 클래스 설정
    const baseClassName = (month !== currentMonth) ? 'current-date-div' : 'prev-date-div';

    const finalClassName = [
        baseClassName,
        isActive ? 'click' : '', // 선택 시 'click' 클래스 추가
        isToday ? 'today' : ''   // 오늘일 시 'today' 클래스 추가
    ].join(' ').trim();

    return (
        <div className={finalClassName} onClick={() => clickDate(date)}>
            {date}
        </div>
    )
}

export default CalenderDate;