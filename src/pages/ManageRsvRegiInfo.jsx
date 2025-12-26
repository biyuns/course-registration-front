import Header from "../components/Header";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css";
import ClassCtManage from "../components/ClassCtManage";
import ManageReserveHeader from "../components/ManageReserveHeader";
import { useEffect, useState } from "react"; // ⭐️ useState 훅을 가져옵니다.
import Navigation from "../components/Navigate";
import nextPage from '../img/page-next.svg'
import nextPageAll from '../img/page-next-all.svg'
import prevPage from '../img/page-prev.svg'
import prevPageAll from '../img/page-prev-all.svg'
import { authAPI } from "../components/apiClient";

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

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState()

    const PAGE_GROUP_SIZE = 4;

    useEffect(() => {
        const fetchManageLectures = async () => {
            try {
                const response = await authAPI.managerLectureList(page);
                setLectureList(response.data.content);
                setTotalPages(response.data.totalPages)
            } catch (err) {
                console.log("예약 조회 실패:", err)
            }
        }

        fetchManageLectures();
    }, [page])

    const currentGroup = Math.floor(page / PAGE_GROUP_SIZE);
    const startPage = currentGroup * PAGE_GROUP_SIZE;
    const endPage = Math.min(startPage + PAGE_GROUP_SIZE, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i < endPage; i++) {
        pageNumbers.push(i);
    }

    // 페이지 이동 이벤트
    const handlePrevGroup = () => {
        const prevGroupStart = startPage - PAGE_GROUP_SIZE;
        setPage(Math.max(0, prevGroupStart));
    };
    const handleNextGroup = () => {
        const nextGroupStart = startPage + PAGE_GROUP_SIZE;
        if (nextGroupStart < totalPages) {
            setPage(nextGroupStart);
        }
    };
    const handlePrevPage = () => setPage(Math.max(0, page - 1));
    const handleNextPage = () => setPage(Math.min(totalPages - 1, page + 1));


    return (
        <>
            <Header />
            <ManageReserveHeader />
            <section>
                <ManageHeaderSub text="예약등록정보" button="등록하기" onButtonClick={movereservationRegi} />
                <div className={rsvRegiInfo.class_ct}>
                    {lectureList.length > 0 ? (
                        lectureList.map((lecture) => (
                            <ClassCtManage key={lecture.lectureId} lectureData={lecture} />
                        ))
                    ) : (
                        <p>등록된 예약 정보가 없습니다.</p>
                    )}
                </div>



                {/* 페이지 이동 */}
                <div className={rsvRegiInfo.pagination}>
                    {/* << 버튼: 이전 그룹으로 이동 */}
                    <button onClick={handlePrevGroup} disabled={startPage === 0}>
                        <img src={prevPageAll} alt="이전 그룹" />
                    </button>

                    {/* < 버튼: 이전 페이지로 이동 */}
                    <button onClick={handlePrevPage} disabled={page === 0}>
                        <img src={prevPage} alt="이전 페이지" />
                    </button>

                    {/* 페이지 번호 목록 */}
                    {pageNumbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => setPage(num)}
                            className={page === num ? rsvRegiInfo.activePage : ""}
                        >
                            {num + 1}
                        </button>
                    ))}

                    {/* > 버튼: 다음 페이지로 이동 */}
                    <button onClick={handleNextPage} disabled={page === totalPages - 1}>
                        <img src={nextPage} alt="다음 페이지" />
                    </button>

                    {/* >> 버튼: 다음 그룹으로 이동 */}
                    <button onClick={handleNextGroup} disabled={endPage >= totalPages}>
                        <img src={nextPageAll} alt="다음 그룹" />
                    </button>
                </div>
            </section>

        </>
    )
}

export default ManagerRsvRegiInfo;