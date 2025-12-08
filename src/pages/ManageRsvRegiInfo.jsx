import Header from "../components/Header";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageReserveHeader from "../components/ManageReserveHeader";


function ManagerRsvRegiInfo() {

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
    return (
        <>
            <Header />
            <ManageReserveHeader />
            <section>
                <ManageHeaderSub text="예약등록정보" button="등록하기" />
                <div className={rsvRegiInfo.class_ct}>
                    {dummyLectureList.map((lecture, index) => (
                        <ClassCtWeb
                            key={index}
                            lectureData={lecture}
                            btnText="예약취소"
                        />
                    ))}
                </div>
            </section>

        </>
    )
}

export default ManagerRsvRegiInfo;