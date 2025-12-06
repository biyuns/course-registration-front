import { useEffect, useState } from 'react';
import '../css/Calender.css';
import CalenderDate from './CalenderDate';

function Calender() {

    const [calenderInfo, setCalenderInfo] = useState({
        year: 0,
        month: 0,
        monthIndex: 0,
        date: 0,
        firstDayOfWeek: 0,
        lastDate: 0,
        beforeLastdate: 0
    })

    const [totalDates, setTotalDates] = useState([]);

    useEffect(() => {
        getCalendarData()
    }, []);

    useEffect(() => {
        calenderList();
    }, [calenderInfo])

    /* 현재 시점의 달력 정보만 반환하는 함수 */
    function getCalendarData() {
        const today = new Date();
        const year = today.getFullYear();
        const monthIndex = today.getMonth();
        const month = monthIndex + 1;
        const beforeLastdate = new Date(year, monthIndex, 0).getDate();
        const firstDay = new Date(year, monthIndex, 1);
        const firstDayOfWeek = firstDay.getDay();
        const lastDate = new Date(year, month, 0).getDate();
        const date = today.getDate();

        setCalenderInfo({
            year: year,
            month: month,
            monthIndex: monthIndex,
            date: date,
            firstDayOfWeek: firstDayOfWeek,
            lastDate: lastDate,
            beforeLastdate: beforeLastdate,
        })


    }




    //달력 배열 만들기
    const calenderList = () => {
        const { firstDayOfWeek, lastDate, beforeLastdate, monthIndex } = calenderInfo;

        const currentMonth = monthIndex + 1; // 예: 12 (monthIndex: 11)
        const prevMonth = (monthIndex === 0) ? 12 : monthIndex; // 예: 11 (monthIndex: 10)
        const nextMonth = (monthIndex === 11) ? 1 : monthIndex + 2; // 예: 1 (monthIndex: 0)

        let totalDatesTemp = [];

        if (firstDayOfWeek == 0) {
            const currentDatas = Array.from({ length: lastDate }, (v, i) => ({
                date: i + 1,
                month: currentMonth,
            }));
            const nextDates = Array.from({ length: 35 - lastDate }, (v, i) => ({
                date: i + 1,
                month: nextMonth,
            }));
            totalDatesTemp = [...currentDatas, ...nextDates];
        } else {
            const prevDates = Array.from({ length: firstDayOfWeek }, (v, i) => {
                const day = beforeLastdate - firstDayOfWeek + 1 + i
                return {
                    date: day,
                    month: prevMonth,
                }
            });
            const currentDates = Array.from({ length: lastDate }, (v, i) => ({
                date: i + 1,
                month: currentMonth,
            }));
            const nextDates = Array.from({ length: 35 - lastDate - firstDayOfWeek }, (v, i) => ({
                date: i + 1,
                month: nextMonth,
            }));
            totalDatesTemp = [...prevDates, ...currentDates, ...nextDates];
        }
        const finalTotalDates = totalDatesTemp.map((dateItem, index) => ({
            ...dateItem,
            id: index
        }));

        setTotalDates(finalTotalDates);
        console.log(totalDates)
    }




    return (
        <div className="calender-div">
            <p>{calenderInfo.month}</p>
            <div>
                {totalDates.map((totalDate) => (
                    <CalenderDate key={totalDate.id}{...totalDate} currentMonth={calenderInfo.month} />
                ))}
            </div>

        </div>
    )
}


export default Calender;