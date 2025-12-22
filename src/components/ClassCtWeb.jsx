import Navigation from './Navigate';

// src/components/ClassCtWeb.jsx
import classC from '../css/ClassCt.module.css';

// lectureData: /api/lectures/list에서 내려오는 한 강의 객체
// click: 버튼 클릭 시 실행할 외부 함수 (예: API 호출, 상태 변경)
// btnText: 버튼에 표시할 텍스트
function ClassCtWeb({ btnText }) {
  // Navigation 훅을 사용하여 페이지 이동 함수 가져오기
  const { reservationpg } = Navigation();

  // lectureData 없으면 아무것도 안 그림
  // if (!lectureData) return null;

  // // 1. 수업 시작 시간 파싱 ("2025-12-25T09:00:00")
  // const startTimeStr = lectureData.startTime;
  // const datePart = startTimeStr.slice(5, 10).replace('-', '/'); // "12/25"
  // const timePart = startTimeStr.slice(11, 16);                  // "09:00"

  // // 2. 예약 기간 파싱
  // const openAt = lectureData.reservationOpenAt
  //   .slice(5, 10)
  //   .replace('-', '/'); // "12/07"
  // const closeAt = lectureData.reservationCloseAt
  //   .slice(5, 10)
  //   .replace('-', '/'); // "12/07"
  // const bookPeriod = `${openAt} ~ ${closeAt}`;

  // // 3. 강사 | 강의실
  // const classInfos = `${lectureData.instructorName} | ${lectureData.classroomName}`;

  // // ⭐️ 통합 이벤트 핸들러: btnText 값에 따라 동작을 분기합니다.
  // const clickE = () => {
  //   if (btnText === "예약취소") {
  //     // 1. 예약취소: 경고창 표시 후, '확인' 시에만 외부 click 함수 실행 (이동 X)
  //     if (window.confirm("정말 취소하시겠습니까?")) {
  //       click();
  //     }
  //     // '취소'를 누르면 함수를 종료하고 이동하지 않습니다.

  //   } else if (btnText === "예약정보확인") {
  //     // 2. 예약정보확인: 외부 click 함수만 실행 (예: 모달 열기), 이동 X
  //     click();

  //   } else {
  //     // 3. 신청하기 (또는 그 외 기본 동작): 외부 click 함수 실행 후, reservationpg로 이동
  //     // '신청하기' 버튼이 이 조건에 해당됩니다.
  //     click();
  //     reservationpg();
  //   }
  // };

  return (
    <div className={classC.class_ct_web}>
      <div className={classC.date_time_ct_web}>
        <p>date</p>
        <p>time</p>
      </div>
      <div>
        <p className={classC.class_infos_web}>info</p>
        <p className={classC.class_name_web}>과목 이름</p>
        <p className={classC.class_book_web}>예약 기간:</p>
      </div>
      {/* ⭐️ 통합 이벤트 핸들러를 버튼에 연결 */}
      <button></button>
    </div>
  );
}

export default ClassCtWeb;