import Header from "../components/Header";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageReserveHeader from "../components/ManageReserveHeader";
import { useState } from "react"; // ⭐️ useState 훅을 가져옵니다.


// 초기 더미 데이터 정의
const initialDummyLectureList = [
    {
        // 10(수) 18:00, 김수정 | 601호, 국어, 2025-12-07~2025-12-09
        id: 1, // ⭐️ 고유 ID 추가
        startTime: "2025-12-10T18:00:00",
        instructorName: "정지훈",
        classroomName: "601호",
        subjectName: "[정규반] 국어",
        reservationOpenAt: "2025-12-07T00:00:00",
        reservationCloseAt: "2025-12-09T23:59:59",
    },
    {
        // 10(수) 12:00, 김수정 | 601호, 국어, 2025-12-07~2025-12-09
        id: 2, // ⭐️ 고유 ID 추가
        startTime: "2025-12-10T12:00:00",
        instructorName: "김수정",
        classroomName: "601호",
        subjectName: "[정규반] 국어",
        reservationOpenAt: "2025-12-07T00:00:00",
        reservationCloseAt: "2025-12-09T23:59:59",
    },
    {
        // 12(금) 18:00, 유지은| 601호, 영어, 2025-12-08~2025-12-11
        id: 3, // ⭐️ 고유 ID 추가
        startTime: "2025-12-12T18:00:00",
        instructorName: "박한종",
        classroomName: "601호",
        subjectName: "[특강] 영어",
        reservationOpenAt: "2025-12-08T00:00:00",
        reservationCloseAt: "2025-12-11T23:59:59",
    },
    {
        // 11(목) 18:00, 유지은| 601호, 영어, 2025-12-07~2025-12-10
        id: 4, // ⭐️ 고유 ID 추가
        startTime: "2025-12-11T18:00:00",
        instructorName: "유지은",
        classroomName: "601호",
        subjectName: "[정규반] 영어",
        reservationOpenAt: "2025-12-07T00:00:00",
        reservationCloseAt: "2025-12-10T23:59:59",
    },
];


function ManagerRsvRegiInfo() {
    // ⭐️ useState를 사용하여 목록 상태 관리
    const [lectureList, setLectureList] = useState(initialDummyLectureList);

    // ⭐️ 예약 취소 처리 함수
    const handleCancelReservation = (lectureId) => {
        // 실제로는 API 호출을 통해 서버에 취소 요청을 보내야 합니다.
        const isConfirmed = window.confirm(`${lectureId}번 강의 예약을 정말 취소하시겠습니까?`);

        if (isConfirmed) {
            // 취소가 확인되면 해당 ID를 가진 항목을 제외하고 새로운 목록을 생성
            const updatedList = lectureList.filter(lecture => lecture.id !== lectureId);
            setLectureList(updatedList);
            console.log(`강의 ID ${lectureId}번이 목록에서 제거되었습니다.`);
        }
    };

    return (
        <>
            <Header />
            <ManageReserveHeader />
            <section>
                <ManageHeaderSub text="예약등록정보" button="등록하기" />
                <div className={rsvRegiInfo.class_ct}>
                    {/* ⭐️ 상태로 관리되는 lectureList를 map으로 순회 */}
                    {lectureList.map((lecture, index) => (
                        <ClassCtWeb
                            key={lecture.id} // 고유 ID를 key로 사용
                            lectureData={lecture}
                            btnText="예약취소"
                            // ⭐️ 취소 함수를 prop으로 전달, 현재 강의 ID를 인수로 넘겨줌
                            click={() => handleCancelReservation(lecture.id)}
                        />
                    ))}
                </div>
            </section>

        </>
    )
}

export default ManagerRsvRegiInfo;