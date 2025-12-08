import classC from '../css/ClassCt.module.css';

// ⭐️ 수정된 코드: lectureData prop을 추가합니다.
function ClassCtWeb({ eventF, btnText, lectureData }) {

    // lectureData가 없으면 아무것도 렌더링하지 않음 (안전 장치)
    if (!lectureData) {
        return null;
    }

    // 1. 수업 시작 시간 파싱
    // "2025-12-25T09:00:00" -> 월(일) 및 시간 추출
    const startTimeStr = lectureData.startTime;

    // 월(일) 추출: 12-25 -> 12/25 형태로 변환하여 요일을 추가하는 로직은 복잡해지므로, 우선 '월(일)'만 추출
    const datePart = startTimeStr.slice(5, 10).replace('-', '/');
    // 시간 추출: 09:00
    const timePart = startTimeStr.slice(11, 16);

    // 2. 예약 기간 파싱
    const openAt = lectureData.reservationOpenAt.slice(5, 10).replace('-', '/'); // 12/07
    const closeAt = lectureData.reservationCloseAt.slice(5, 10).replace('-', '/'); // 12/07
    const bookPeriod = `${openAt} ~ ${closeAt}`; // 예: 12/07 ~ 12/07

    // 3. 강의 정보 조합
    const classInfos = `${lectureData.instructorName} | ${lectureData.classroomName}`;


    return (
        <div className={classC.class_ct_web}>
            {/* ⭐️ 수정된 코드: 날짜 및 시간 데이터 연동 */}
            <div className={classC.date_time_ct_web}>
                <p>{datePart}</p> {/* 예: 12/25 */}
                <p>{timePart}</p> {/* 예: 09:00 */}
            </div>
            <div>
                {/* ⭐️ 수정된 코드: 강사 및 강의실 정보 연동 */}
                <p className={classC.class_infos_web}>{classInfos}</p>
                {/* ⭐️ 수정된 코드: 강의명 연동 */}
                <p className={classC.class_name_web}>{lectureData.subjectName}</p>
                {/* ⭐️ 수정된 코드: 예약 기간 연동 */}
                <p className={classC.class_book_web}>예약 기간: {bookPeriod}</p>
            </div>
            <button onClick={eventF}>
                {btnText}
            </button>
        </div>
    )
}

export default ClassCtWeb;