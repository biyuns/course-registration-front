import Header from "../components/Header";
import rsvInfo from "../css/RsvInfo.module.css"
import ReservationInfo from "../components/ReservationInfo";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css"
import { useState } from "react";
import ManageReserveHeader from "../components/ManageReserveHeader";

function ManagerRsvInfo() {

    // ⭐️ 더미 데이터 정의
    const dummyLectureList = [
        {
            // 10(수) 18:00, 김수정 | 601호, 국어, 2025-12-07~2025-12-09
            startTime: "2025-12-10T18:00:00",
            instructorName: "정지훈",
            classroomName: "601호",
            subjectName: "[정규반] 국어",
            reservationOpenAt: "2025-12-07T00:00:00",
            reservationCloseAt: "2025-12-09T23:59:59",
        },
        {
            // 10(수) 12:00, 김수정 | 601호, 국어, 2025-12-07~2025-12-09
            startTime: "2025-12-10T12:00:00",
            instructorName: "김수정",
            classroomName: "601호",
            subjectName: "[정규반] 국어",
            reservationOpenAt: "2025-12-07T00:00:00",
            reservationCloseAt: "2025-12-09T23:59:59",
        },
        {
            // 12(금) 18:00, 유지은| 601호, 영어, 2025-12-08~2025-12-11
            startTime: "2025-12-12T18:00:00",
            instructorName: "박한종",
            classroomName: "601호",
            subjectName: "[특강] 영어",
            reservationOpenAt: "2025-12-08T00:00:00",
            reservationCloseAt: "2025-12-11T23:59:59",
        },
        {
            // 11(목) 18:00, 유지은| 601호, 영어, 2025-12-07~2025-12-10
            startTime: "2025-12-11T18:00:00",
            instructorName: "유지은",
            classroomName: "601호",
            subjectName: "[정규반] 영어",
            reservationOpenAt: "2025-12-07T00:00:00",
            reservationCloseAt: "2025-12-10T23:59:59",
        },
    ];

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(2);
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
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />
                        <ReservationInfo />

                    </div>
                </section>
            )}


        </>
    )
}

export default ManagerRsvInfo;