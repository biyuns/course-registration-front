// src/pages/Home.jsx (파일 위치는 너 프로젝트 구조에 맞게)
import hom from '../css/Home.module.css';
import ClassCtWeb from '../components/ClassCtWeb';
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { authAPI } from '../components/apiClient'; // /api/reservations/myRV, /api/lectures/list[web:16]

function Home() {
    const { moveclassaply, movetime } = Navigation();
    const [myClassData, setMyClassData] = useState(null); // ⭐️ 수정: 초기값을 null로 설정 (데이터가 없거나 로딩 중임을 표현)
    const [error, setError] = useState(null); // ⭐️ 수정: 초기값을 null로 설정

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const fetchMyClassData = async () => {
        try {
            setError(null);
            // ⭐️ 수정된 코드: 정의된 authAPI를 사용하여 GET 요청
            const res = await authAPI.getMyReservations();

            // 응답 데이터가 배열이고, 배열의 첫 번째 요소가 실제 데이터라고 가정
            const reservationData = res.data[0];

            if (reservationData) {
                // ⭐️ 수정된 코드: 데이터 파싱 로직 개선
                const startTime = reservationData.startTime;

                // "2025-12-25T09:00:00" -> 월/일만 추출 (예: 12/25)
                const monthDay = startTime.slice(5, 10).replace('-', '/');
                // "2025-12-25T09:00:00" -> 시간:분만 추출 (예: 09:00)
                const hourMinute = startTime.slice(11, 16);

                // 상태 업데이트
                setMyClassData(reservationData);
                setDate(monthDay);
                setTime(hourMinute);
            } else {
                // 데이터 배열이 비어있는 경우 (강의 정보 없음)
                setMyClassData(null);
                setError(404); // 404와 동일하게 처리하여 '강의 정보가 없습니다.' 표시
            }

        } catch (error) {
            // console.error("API 호출 중 오류 발생:", error); // 디버깅용
            if (error.response) {
                // HTTP 상태 코드 추출
                const httpStatus = error.response.status;
                setError(httpStatus);
            } else {
                // 네트워크 오류 등의 기타 오류
                setError('NETWORK_ERROR');
            }
            setMyClassData(null); // 오류 발생 시 데이터 비우기
        }
    }

    useEffect(() => {
        fetchMyClassData();
    }, []);


    // error가 404이거나 myClassData가 null인 경우 '강의 정보 없음'으로 간주
    const isErrorOrNoData = error === 404 || myClassData === null;

    // ⭐️ 수정된 코드: 상태와 데이터 유무에 따라 클래스를 적용
    const NoneClass = isErrorOrNoData ? hom.block : hom.none;
    const blockClass = isErrorOrNoData ? hom.none : hom.block;


    return (
        <>
            <Header />
            <section className={hom.main_home_ct}>
                <div>
                    <div className={hom.my_class}>
                        <div className={hom.my_class_top}>
                            <p>내 강의 확인</p>
                        </div>
                        {/* 강의 정보가 없는 경우 표시 */}
                        <div className={`${NoneClass} ${hom.none_class}`}>
                            강의 정보가 없습니다.
                        </div>
                        {/* 강의 정보가 있는 경우 표시 */}
                        <div className={`${hom.my_class_info} ${blockClass}`}>
                            {/* myClassData가 있을 때만 렌더링되므로, 안전하게 접근 가능 */}
                            <div className={hom.date_time_ct}>
                                <p>{date}</p><p>{time}</p><div className={hom.gray_line}></div><p className={hom.seat_num}>{myClassData && myClassData.seatNumber}</p>
                            </div>
                            <div>
                                <div className={hom.gray_ct}>수업명</div>
                                <p>{myClassData && myClassData.lectureName}</p>
                            </div>
                            <div>
                                <div className={hom.gray_ct}>강사</div>
                                <p>{myClassData && myClassData.instructorName}</p>
                            </div>
                            <button>강의 정보 확인하기</button>

                        </div>
                    </div>
                    <div className={hom.class_button_ct}>
                        <button className={hom.class_apply_btn} onClick={moveclassaply}><p>강의 신청</p></button>
                        <button className={hom.class_check_btn} onClick={movetime}><p>시간표 확인</p></button>
                    </div>
                    <section className={hom.home_bottom}>
                        <div className={hom.gray_hr}>
                            <div>수강정보</div>
                        </div>
                        <div className={hom.class_apply_web_ct}>
                            <ClassCtWeb eventF="" btnText="신청하기" />
                            <ClassCtWeb eventF="" btnText="신청하기" />
                        </div>
                    </section>
                </div>
            </section >
        </>
    )
}

export default Home;
