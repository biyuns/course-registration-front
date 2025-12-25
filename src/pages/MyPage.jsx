import ClassCtMy from "../components/ClassCtMy";
import myp from '../css/MyPage.module.css';
import profileImg from '../img/profile-img.svg';
import backBtn from '../img/back-btn.svg';
import Header from "../components/Header";
import ClassCtWeb2 from "../components/ClassCtWeb2";
import { useState, useEffect } from "react";
import { authAPI } from '../components/apiClient';

const dummyLectureList = [
    {
        "reservationId": 2,
        "lectureName": "고3 수능 국어",
        "instructorName": "신영균",
        "classroomName": "601호",
        "seatNumber": "601호-11",
        "startTime": "2025-12-25T09:00:00",
        "endTime": "2025-12-25T12:00:00"
    },
    {
        "reservationId": 3,
        "lectureName": "고3 수능 국어",
        "instructorName": "신영훈",
        "classroomName": "601호",
        "seatNumber": "601호-11",
        "startTime": "2025-12-25T09:00:00",
        "endTime": "2025-12-25T12:00:00"
    }
]

function MyPage() {

    const [myReservationData, setMyReservationData] = useState(dummyLectureList);
    const [myInfo, setMyInfo] = useState({});


    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(null);




    useEffect(() => {
        // 로그인확인
        const atoken = localStorage.getItem('accessToken');

        const isValidToken = atoken && atoken !== "null" && atoken !== "undefined";

        if (!isValidToken) {
            setIsLoggedIn(false);
            return;
        }


        setIsLoggedIn(true);

        //연동
        const fetchData = async () => {
            setLoading(true);
            try {
                const [resReservation, resInfo] = await Promise.all([
                    authAPI.getMyReservations(),
                    authAPI.getMyInfo()
                ]);

                setMyReservationData(resReservation.data);
                setMyInfo(resInfo.data);
            } catch (err) {
                console.error("데이터 로딩 실패:", err);
                if (err.response?.status === 401) {
                    setIsLoggedIn(false);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);




    if (isLoggedIn === null) return <div>인증 확인 중...</div>;

    return (
        <>
            <Header />
            <header className={myp.mypage_header}>
                <div>
                    <button><img src={backBtn}></img></button>
                    <p>My</p>
                </div>
            </header>
            {isLoggedIn ? (
                <section className={myp.profile_section}>
                    <div><img src={profileImg} alt="프로필" /></div>
                    <p className={myp.my_name}>{myInfo.nickname || "사용자"}님</p>
                    <p className={myp.my_id}>{myInfo.username || "아이디 정보 없음"}</p>
                    <button className={myp.app}>내 정보 수정</button>
                    <button className={myp.web}>내 정보</button>

                </section>
            ) : (
                /* 비로그인 상태일 때 */
                <section className={myp.profile_section}>
                    <div><img src={profileImg} alt="프로필" /></div>
                    <p className={myp.my_name}>로그인 해주세요</p>
                    <p className={myp.my_id}>{myInfo.username || "아이디 정보 없음"}</p>
                    <button>로그인</button>
                </section>
            )}




            <div className={myp.gray_div}></div>

            <section>
                <div className={myp.my_class_info_header}>
                    <p>내 강의 신청 정보</p>
                </div>
                <div className={myp.my_classes}>
                    {myReservationData.map((reservation) => (
                        <ClassCtMy
                            key={reservation.reservationId}
                            reservationData={reservation}
                        />
                    ))}
                </div>
                <div className={myp.my_classes_web}>
                    {myReservationData.map((reservation) => (
                        <ClassCtWeb2
                            key={reservation.reservationId}
                            reservationData={reservation}
                        />
                    ))}
                </div>
            </section>


        </>
    )
}

export default MyPage;