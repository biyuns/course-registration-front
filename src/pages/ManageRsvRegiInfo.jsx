import Header from "../components/Header";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css";
import ClassCtManage from "../components/ClassCtManage";
import ManageReserveHeader from "../components/ManageReserveHeader";
import { useState } from "react"; // ⭐️ useState 훅을 가져옵니다.
import Navigation from "../components/Navigate";

const dummyLectureList = [
    {
        lectureId: 1,
        message: "예약 등록 반 목록 조회 성공",
        classroomId: 1,
        classroomName: "601호",
        instructorId: 1,
        instructorName: "정지훈",
        subjectId: 1,
        subjectName: "[정규반] 국어",
        startTime: "2025-12-01T18:00:00",
        endTime: "2025-12-01T21:00:00",
        reservationOpenAt: "2025-12-07T00:00:00",
        reservationCloseAt: "2025-12-09T23:59:59",
        totalSeats: 120,
        reservedSeats: 30,
        availableSeats: 90,
    },
    {
        lectureId: 2,
        message: "예약 등록 반 목록 조회 성공",
        classroomId: 1,
        classroomName: "601호",
        instructorId: 2,
        instructorName: "김수정",
        subjectId: 1,
        subjectName: "[정규반] 국어",
        startTime: "2025-12-10T12:00:00",
        endTime: "2025-12-10T15:00:00",
        reservationOpenAt: "2025-12-07T00:00:00",
        reservationCloseAt: "2025-12-09T23:59:59",
        totalSeats: 120,
        reservedSeats: 80,
        availableSeats: 40,
    },
    {
        lectureId: 3,
        message: "예약 등록 반 목록 조회 성공",
        classroomId: 1,
        classroomName: "601호",
        instructorId: 3,
        instructorName: "박한종",
        subjectId: 2,
        subjectName: "[특강] 영어",
        startTime: "2025-12-12T18:00:00",
        endTime: "2025-12-12T21:00:00",
        reservationOpenAt: "2025-12-08T00:00:00",
        reservationCloseAt: "2025-12-11T23:59:59",
        totalSeats: 100,
        reservedSeats: 100,
        availableSeats: 0,
    },
    {
        lectureId: 4,
        message: "예약 등록 반 목록 조회 성공",
        classroomId: 1,
        classroomName: "601호",
        instructorId: 4,
        instructorName: "유지은",
        subjectId: 2,
        subjectName: "[정규반] 영어",
        startTime: "2025-12-11T18:00:00",
        endTime: "2025-12-11T21:00:00",
        reservationOpenAt: "2025-12-07T00:00:00",
        reservationCloseAt: "2025-12-10T23:59:59",
        totalSeats: 110,
        reservedSeats: 50,
        availableSeats: 60,
    },
];


function ManagerRsvRegiInfo() {

    const { movereservationRegi } = Navigation();

    const [lectureList, setLectureList] = useState(dummyLectureList);


    return (
        <>
            <Header />
            <ManageReserveHeader />
            <section>
                <ManageHeaderSub text="예약등록정보" button="등록하기" onButtonClick={movereservationRegi} />
                <div className={rsvRegiInfo.class_ct}>
                    {lectureList.map((lecture) => (
                        <ClassCtManage
                            key={lecture.lectureId}
                            lectureData={lecture}
                        />
                    ))}
                </div>
            </section>

        </>
    )
}

export default ManagerRsvRegiInfo;