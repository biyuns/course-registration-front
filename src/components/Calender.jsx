function Calender() {

    /* 현재 시점의 달력 정보만 반환하는 함수 */
    function getCalendarData() {
        // 1. 현재 날짜와 시간 정보가 담긴 Date 객체 생성
        const today = new Date();

        // 2. 현재 연도와 월 추출
        const year = today.getFullYear();
        // getMonth()는 0(1월)부터 11(12월)까지 반환합니다.
        const monthIndex = today.getMonth();
        const month = monthIndex + 1; // 사용자 표시용 (1부터 시작)

        const beforeLastdate = new Date(year, monthIndex, 0).getDate();

        // --- 나머지 달력 정보 계산 로직 ---

        // 3. 해당 월의 1일 Date 객체
        const firstDay = new Date(year, monthIndex, 1);

        // 4. 1일의 요일 (달력 시작 위치 결정, 0:일, 6:토)
        const firstDayOfWeek = firstDay.getDay();

        // 5. 해당 월의 마지막 일자 (총 일수)
        // 현재 월(`monthIndex + 1` 또는 `month`)의 다음 달의 0번째 날짜를 구함
        const lastDate = new Date(year, month, 0).getDate();

        const date = today.getDate(); // 1부터 31

        return {
            year: year,
            month: month,
            date: date,
            firstDayOfWeek: firstDayOfWeek,
            lastDate: lastDate,
            beforeLastdate: beforeLastdate,
        };
    }

    const currentCalendar = getCalendarData();


    return (
        <div>

        </div>
    )
}


export default Calender;