import { useEffect, useState } from 'react';
import '../css/Calender.css';
import CalenderDate from './CalenderDate';
import nextBtn from '../img/calender-next-btn.svg';
import prevBtn from '../img/calender-prev-btn.svg';

function Calender({ clickDate }) {
    const [calenderInfo, setCalenderInfo] = useState({
        year: 0,
        month: 0,
        monthIndex: 0,
        date: 0,
        firstDayOfWeek: 0,
        lastDate: 0,
        beforeLastdate: 0
    });

    const [totalDates, setTotalDates] = useState([]);
    const [selectedId, setSelectedId] = useState(null); // 클릭 하이라이트용 ID 상태
    const [viewDate, setViewDate] = useState(new Date()); // 달력 기준 시점

    const now = new Date();
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth() + 1;
    const todayDate = now.getDate();

    // 현재 보고 있는 달이 실제 이번 달인지 체크 (버튼 제어용)
    const isCurrentMonth =
        viewDate.getMonth() === now.getMonth() &&
        viewDate.getFullYear() === now.getFullYear();

    useEffect(() => {
        getCalendarData(viewDate);
    }, [viewDate]);

    useEffect(() => {
        calenderList();
    }, [calenderInfo]);

    function getCalendarData(baseDate) {
        const year = baseDate.getFullYear();
        const monthIndex = baseDate.getMonth();
        const month = monthIndex + 1;

        const beforeLastdate = new Date(year, monthIndex, 0).getDate();
        const firstDay = new Date(year, monthIndex, 1);
        const firstDayOfWeek = firstDay.getDay();
        const lastDate = new Date(year, month, 0).getDate();
        const date = baseDate.getDate();

        setCalenderInfo({
            year, month, monthIndex, date, firstDayOfWeek, lastDate, beforeLastdate,
        });
    }

    const handleNextMonth = () => {
        if (isCurrentMonth) {
            const next = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
            setViewDate(next);
            setSelectedId(null); // 달 변경 시 선택 해제
        }
    };

    const handlePrevMonth = () => {
        if (!isCurrentMonth) {
            setViewDate(new Date());
            setSelectedId(null); // 달 변경 시 선택 해제
        }
    };

    const calenderList = () => {
        const { firstDayOfWeek, lastDate, beforeLastdate, monthIndex } = calenderInfo;
        const currentMonth = monthIndex + 1;
        const prevMonth = (monthIndex === 0) ? 12 : monthIndex;
        const nextMonth = (monthIndex === 11) ? 1 : monthIndex + 2;

        let totalDatesTemp = [];

        if (firstDayOfWeek === 0) {
            const currentDatas = Array.from({ length: lastDate }, (v, i) => ({
                date: i + 1, month: currentMonth,
            }));
            const nextDates = Array.from({ length: 35 - lastDate }, (v, i) => ({
                date: i + 1, month: nextMonth,
            }));
            totalDatesTemp = [...currentDatas, ...nextDates];
        } else {
            const prevDates = Array.from({ length: firstDayOfWeek }, (v, i) => {
                const day = beforeLastdate - firstDayOfWeek + 1 + i;
                return { date: day, month: prevMonth };
            });
            const currentDates = Array.from({ length: lastDate }, (v, i) => ({
                date: i + 1, month: currentMonth,
            }));
            const nextDates = Array.from({ length: 35 - lastDate - firstDayOfWeek }, (v, i) => ({
                date: i + 1, month: nextMonth,
            }));
            totalDatesTemp = [...prevDates, ...currentDates, ...nextDates];
        }

        const finalTotalDates = totalDatesTemp.map((dateItem, index) => ({
            ...dateItem,
            id: index
        }));

        setTotalDates(finalTotalDates);
    };

    return (
        <div className="calender-div">
            <div className='calender-month'>
                <button onClick={handlePrevMonth} disabled={isCurrentMonth} className={isCurrentMonth ? 'btn-disabled' : ''}>
                    <img src={prevBtn} alt="이전달" />
                </button>
                <p>{calenderInfo.month}월</p>
                <button onClick={handleNextMonth} disabled={!isCurrentMonth} className={!isCurrentMonth ? 'btn-disabled' : ''}>
                    <img src={nextBtn} alt="다음달" />
                </button>
            </div>

            <div className="total-date-ct">
                {totalDates.map((totalDate) => (
                    <CalenderDate
                        key={totalDate.id}
                        {...totalDate}
                        currentMonth={calenderInfo.month}
                        isActive={selectedId === totalDate.id}
                        isToday={
                            calenderInfo.year === todayYear &&
                            totalDate.month === todayMonth &&
                            totalDate.date === todayDate
                        }
                        clickDate={() => {
                            setSelectedId(totalDate.id);
                            clickDate(totalDate.date);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Calender;