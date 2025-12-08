// src/components/ClassCtWeb.jsx
import classC from '../css/ClassCt.module.css';

// lectureData: /api/lectures/list에서 내려오는 한 강의 객체
// eventF: 버튼 클릭 시 실행할 함수
// btnText: 버튼에 표시할 텍스트
function ClassCtWeb({ eventF, btnText, lectureData }) {
  // lectureData 없으면 아무것도 안 그림
  if (!lectureData) return null;

  // 1. 수업 시작 시간 파싱 ("2025-12-25T09:00:00")
  const startTimeStr = lectureData.startTime;
  const datePart = startTimeStr.slice(5, 10).replace('-', '/'); // "12/25"
  const timePart = startTimeStr.slice(11, 16);                  // "09:00"

  // 2. 예약 기간 파싱
  const openAt = lectureData.reservationOpenAt
    .slice(5, 10)
    .replace('-', '/'); // "12/07"
  const closeAt = lectureData.reservationCloseAt
    .slice(5, 10)
    .replace('-', '/'); // "12/07"
  const bookPeriod = `${openAt} ~ ${closeAt}`;

  // 3. 강사 | 강의실
  const classInfos = `${lectureData.instructorName} | ${lectureData.classroomName}`;

  return (
    <div className={classC.class_ct_web}>
      <div className={classC.date_time_ct_web}>
        <p>{datePart}</p>
        <p>{timePart}</p>
      </div>
      <div>
        <p className={classC.class_infos_web}>{classInfos}</p>
        <p className={classC.class_name_web}>{lectureData.subjectName}</p>
        <p className={classC.class_book_web}>예약 기간: {bookPeriod}</p>
      </div>
      <button onClick={eventF}>{btnText}</button>
    </div>
  );
}

export default ClassCtWeb;
