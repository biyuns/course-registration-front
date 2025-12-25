import HeaderSub from "../components/HeaderSub";
import TimeC from '../css/TimeCheck.module.css';
import ClassCt from "../components/ClassCt";
import Calender from "../components/Calender";
import ClassCtWeb from "../components/ClassCtWeb";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { authAPI } from '../components/apiClient';


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



function TimeCheck() {

    const [classData, setClassData] = useState([]);
    const [selectData, setSelectData] = useState([])

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {

        const fetchLectures = async () => {
            try {
                setLoading(true);
                const response = await authAPI.getLectureList();
                setClassData(response.data);
            } catch (err) {
                console.error("강의 목록 로딩 실패:", err);
                setError(err.response?.status || 500);
            } finally {
                setLoading(false);
            }
        };

        fetchLectures();

    }, []);

    //클릭값 가져오기
    const clickDate = (day) => {


        const selectClassDate = classData.filter((classTime) => {
            const lectureDay = Number(classTime.startTime.slice(8, 10));

            return lectureDay === day;
        });

        setSelectData(selectClassDate);
    }

    return (
        <>
            <Header />
            <HeaderSub title="시간표 확인" />
            <section className={TimeC.main_time_ct}>
                <div>
                    <section className={TimeC.calender_section}>
                        <p className={TimeC.app_calender_p}>달력</p>
                        <p className={TimeC.web_calender_p}>일정안내</p>
                        <Calender clickDate={clickDate} />
                    </section>
                    <section className={TimeC.classes_ct}>
                        {selectData.map((lecture) => (
                            <ClassCt
                                key={lecture.lectureId}
                                lectureData={lecture}
                            />
                        ))}
                    </section>
                    <section className={TimeC.classes_ct_web}>
                        {selectData.map((lecture) => (
                            <ClassCtWeb
                                key={lecture.lectureId}
                                lectureData={lecture}
                                btnText="신청하기"

                            />
                        ))}
                    </section>
                </div>
            </section>

        </>
    )
}

export default TimeCheck;