import Header from "../components/Header";
import rsvInfo from "../css/RsvInfo.module.css"
import ReservationInfo from "../components/ReservationInfo";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css"
import { useState } from "react";
import ManageReserveHeader from "../components/ManageReserveHeader";

// ⭐️ 더미 예약 데이터 정의 (컴포넌트 외부에 위치)



function ManagerRsvInfo() {

    // (기존 dummyLectureList는 step 1에서 ClassCtWeb을 렌더링하는 데 사용됨)
    const dummyLectureList = [
        {
            startTime: "2025-12-10T18:00:00",
            instructorName: "정지훈",
            classroomName: "601호",
            subjectName: "[정규반] 국어",
            reservationOpenAt: "2025-12-07T00:00:00",
            reservationCloseAt: "2025-12-09T23:59:59",
        },
        {
            startTime: "2025-12-10T12:00:00",
            instructorName: "김수정",
            classroomName: "601호",
            subjectName: "[정규반] 국어",
            reservationOpenAt: "2025-12-07T00:00:00",
            reservationCloseAt: "2025-12-09T23:59:59",
        },
        {
            startTime: "2025-12-12T18:00:00",
            instructorName: "박한종",
            classroomName: "601호",
            subjectName: "[특강] 영어",
            reservationOpenAt: "2025-12-08T00:00:00",
            reservationCloseAt: "2025-12-11T23:59:59",
        },
        {
            startTime: "2025-12-11T18:00:00",
            instructorName: "유지은",
            classroomName: "601호",
            subjectName: "[정규반] 영어",
            reservationOpenAt: "2025-12-07T00:00:00",
            reservationCloseAt: "2025-12-10T23:59:59",
        },
    ];


    const dummyReservationData = [
        { id: "00001", subject: "국어(기초)", instructor: "김민지", phone: "010-1234-5678", reservationTime: "2025.12.08 11:30", email: "minji.k@example.com" },
        { id: "00002", subject: "영어(회화)", instructor: "박지훈", phone: "010-9876-5432", reservationTime: "2025.12.08 14:00", email: "jihoon.p@example.com" },
        { id: "00003", subject: "수학(미적분)", instructor: "최현우", phone: "010-5555-4444", reservationTime: "2025.12.09 09:00", email: "hyeon.c@example.com" },
        { id: "00004", subject: "과학(물리)", instructor: "이서연", phone: "010-2222-7777", reservationTime: "2025.12.09 16:30", email: "seoyeon.l@example.com" },
        { id: "00005", subject: "국어(기초)", instructor: "정우진", phone: "010-3333-8888", reservationTime: "2025.12.10 10:00", email: "woojin.j@example.com" },
        { id: "00006", subject: "영어(회화)", instructor: "한예슬", phone: "010-7777-1111", reservationTime: "2025.12.10 19:00", email: "yesul.h@example.com" },
        { id: "00007", subject: "수학(미적분)", instructor: "오승민", phone: "010-6666-0000", reservationTime: "2025.12.11 13:00", email: "seungmin.o@example.com" },
        { id: "00008", subject: "과학(물리)", instructor: "강지수", phone: "010-4444-9999", reservationTime: "2025.12.11 17:30", email: "jisoo.k@example.com" },
        { id: "00009", subject: "국어(기초)", instructor: "윤하늘", phone: "010-1010-2020", reservationTime: "2025.12.12 12:00", email: "haneul.y@example.com" },
        { id: "00010", subject: "영어(회화)", instructor: "신동엽", phone: "010-3030-4040", reservationTime: "2025.12.12 15:00", email: "dongyeob.s@example.com" },
    ];

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(2);
    };

    // ⭐️ ReservationInfo에 전달할 props를 정의합니다.
    // ReservationInfo 컴포넌트가 props를 받도록 수정해야 이 데이터가 표시됩니다.
    // 현재 ReservationInfo 컴포넌트에는 data prop이 없지만, map을 위해 구조화합니다.
    const handleCancel = (id) => {
        console.log(`${id} 예약 취소 로직 실행`);
        // 실제 API 호출 또는 상태 변경 로직
    };


    return (
        <>
            <Header />
            <ManageReserveHeader />
            {step === 1 && (
                <section className={rsvInfo.reservation_check_ct}>
                    <ManageHeaderSub text="예약자 정보 확인" button="등록하기" />
                    <div className={rsvRegiInfo.class_ct}>
                        {dummyLectureList.map((lecture, index) => (
                            <ClassCtWeb
                                key={index}
                                lectureData={lecture}
                                btnText="예약정보확인"
                                click={handleNext}
                            />
                        ))}
                    </div>
                </section>
            )}
            {step === 2 && (

                <section>
                    <div className={rsvInfo.sub_title}>
                        <p>예약자 정보</p>
                        <div className={rsvInfo.search_div}>
                            <input placeholder="예약자 성함" />
                            <button></button>
                        </div>
                    </div>

                    <div className={rsvInfo.reservations_ct}>
                        <div className={rsvInfo.top}>
                            <p className={rsvInfo.info_0_9}>예약번호</p><p className={rsvInfo.info_1}>수업명</p><p className={rsvInfo.info_1}>이름</p><p className={rsvInfo.info_1_7}>전화번호</p><p className={rsvInfo.info_1_9}>예약일시</p><p className={rsvInfo.info_2_5}>이메일</p><p className={rsvInfo.info_1}></p>
                        </div>

                        {/* ⭐️ 더미 데이터를 map으로 ReservationInfo에 전달하여 렌더링 */}
                        {dummyReservationData.map((data) => (
                            <ReservationInfo
                                key={data.id}
                                reservationData={data}
                                // 예약 취소 버튼 클릭 시 실행될 함수 (예시)
                                clickCancel={() => handleCancel(data.id)}
                            />
                        ))}

                    </div>
                </section>
            )}


        </>
    )
}

export default ManagerRsvInfo;