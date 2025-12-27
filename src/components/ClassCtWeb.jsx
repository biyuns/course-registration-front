import Navigation from './Navigate';

// src/components/ClassCtWeb.jsx
import classC from '../css/ClassCt.module.css';


function ClassCtWeb({ lectureData, btnText, click }) {
  // Navigation 훅을 사용하여 페이지 이동 함수 가져오기
  const { reservationpg } = Navigation();

  const {
    lectureId,
    classroomName,
    instructorName,
    subjectName,
    startTime,
    endTime,
    reservationOpenAt,
    reservationCloseAt,
    totalSeats,
    reservedSeats
  } = lectureData;

  const monthDate = startTime.slice(5, 7)
  const dayDate = startTime.slice(8, 10)
  const time = startTime.slice(11, 16)

  const classStartTime = startTime.replace('T', ' ')

  const reservationOpen = reservationOpenAt.replace('T', ' ')
  const reservationClose = reservationCloseAt.replace('T', ' ')


  return (
    <div className={classC.class_ct_web}>
      <div className={classC.date_time_ct_web}>
        <p>{dayDate}</p>
        <p>{time}</p>
      </div>
      <div>
        <p className={classC.class_infos_web}>{instructorName} | {classroomName} | 수업일:{classStartTime}</p>
        <p className={classC.class_name_web}>{subjectName}</p>
        <p className={classC.class_book_web}>예약 기간: {reservationOpen}~{reservationClose}</p>
      </div>
      <button onClick={reservationpg}>{btnText}</button>
    </div>
  );
}

export default ClassCtWeb;