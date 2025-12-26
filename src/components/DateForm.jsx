import rsvRegi from '../css/RsvRegi.module.css'



function DateForm({ stateYear, stateSetYear, stateMonth, stateSetMonth, stateDay, stateSetDay }) {

    const now = new Date();
    const currentYear = now.getFullYear();

    const years = Array.from({ length: 11 }, (_, i) => currentYear + i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    // 3. 연도와 월에 따른 일수 계산 함수
    const getDaysInMonth = (year, month) => {
        const lastDay = new Date(year, month, 0).getDate();
        return Array.from({ length: lastDay }, (_, i) => i + 1);
    };

    // 4. 월 변경 시 일자 보정 핸들러
    const handleMonthChange = (year, month, setMonth, currentDay, setDay) => {
        const lastDay = new Date(year, month, 0).getDate();
        setMonth(month);
        if (currentDay > lastDay) {
            setDay(lastDay);
        }
    };

    // 숫자를 두 자리 문자열로 변환 (예: 1 -> "01")
    const formatNum = (num) => String(num).padStart(2, '0');

    return (
        <>
            <select className={rsvRegi.year} value={stateYear} onChange={(e) => stateSetYear(Number(e.target.value))}>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <label>년</label>
            <select value={stateMonth} onChange={(e) => handleMonthChange(stateYear, Number(e.target.value), stateSetMonth, stateDay, stateSetDay)}>
                {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <label>월</label>
            <select value={stateDay} onChange={(e) => stateSetDay(Number(e.target.value))}>
                {getDaysInMonth(stateYear, stateMonth).map(d => (
                    <option key={d} value={d}>{formatNum(d)}</option>
                ))}
            </select>
            <label>일</label>
        </>
    )
}

export default DateForm;