// src/pages/Home.jsx (파일 위치는 너 프로젝트 구조에 맞게)
import hom from '../css/Home.module.css';
import ClassCtWeb from '../components/ClassCtWeb';
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { authAPI } from '../components/apiClient'; // /api/reservations/myRV, /api/lectures/list[web:16]

function Home() {
  const { moveclassaply, movetime } = Navigation();

  // 내 강의 정보 (예약된 강의)
  const [myClassData, setMyClassData] = useState(null);
  const [myClassError, setMyClassError] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // 강의 리스트 (신청 가능한 강의 목록)
  const [lectureList, setLectureList] = useState([]);
  const [lectureError, setLectureError] = useState(null);

  // 1) 내 예약 강의 정보 조회: GET /api/reservations/myRV
  const fetchMyClassData = async () => {
    try {
      setMyClassError(null);

      const res = await authAPI.getMyReservations(); // [ { ... } ] 형태[image:1]
      const reservationData = res.data[0];

      if (reservationData) {
        const startTime = reservationData.startTime; // "2025-12-25T09:00:00"

        const monthDay = startTime.slice(5, 10).replace('-', '/'); // "12/25"
        const hourMinute = startTime.slice(11, 16);                // "09:00"

        setMyClassData(reservationData);
        setDate(monthDay);
        setTime(hourMinute);
      } else {
        setMyClassData(null);
        setMyClassError(404); // 강의 정보 없음
      }
    } catch (error) {
      if (error.response) {
        setMyClassError(error.response.status); // 401,404 등
      } else {
        setMyClassError('NETWORK_ERROR');
      }
      setMyClassData(null);
    }
  };

  // 2) 강의 리스트 조회: GET /api/lectures/list
  const fetchLectureList = async () => {
    try {
      setLectureError(null);
      const res = await authAPI.getLectureList(); // [ { lectureId, ... } ][image:1]
      setLectureList(res.data || []);
    } catch (error) {
      console.error(error);
      setLectureError(error.response?.status || 'ERROR');
      setLectureList([]);
    }
  };

  useEffect(() => {
    fetchMyClassData();
    fetchLectureList();
  }, []);

  // 내 강의 블록 표시 상태
  const isMyClassEmpty = myClassError === 404 || myClassData === null;
  const NoneClass = isMyClassEmpty ? hom.block : hom.none;
  const blockClass = isMyClassEmpty ? hom.none : hom.block;

  return (
    <>
      <Header />
      <section className={hom.main_home_ct}>
        {/* 내 강의 확인 */}
        <div className={hom.my_class}>
          <div className={hom.my_class_top}>
            <p>내 강의 확인</p>
          </div>

          {/* 강의 정보 없음 */}
          <div className={`${NoneClass} ${hom.none_class}`}>
            강의 정보가 없습니다.
          </div>

          {/* 강의 정보 있음 */}
          <div className={`${hom.my_class_info} ${blockClass}`}>
            {myClassData && (
              <>
                <div className={hom.date_time_ct}>
                  <p>{date}</p>
                  <p>{time}</p>
                  <div className={hom.gray_line}></div>
                  <p className={hom.seat_num}>{myClassData.seatNumber}</p>
                </div>
                <div>
                  <div className={hom.gray_ct}>수업명</div>
                  <p>{myClassData.lectureName}</p>
                </div>
                <div>
                  <div className={hom.gray_ct}>강사</div>
                  <p>{myClassData.instructorName}</p>
                </div>
                <button>강의 정보 확인하기</button>
              </>
            )}
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className={hom.class_button_ct}>
          <button className={hom.class_apply_btn} onClick={moveclassaply}>
            <p>강의 신청</p>
          </button>
          <button className={hom.class_check_btn} onClick={movetime}>
            <p>시간표 확인</p>
          </button>
        </div>

        {/* 강의 리스트 (강의 신청용) */}
        <section className={hom.home_bottom}>
          <div className={hom.gray_hr}>
            <div>수강정보</div>
          </div>

          <div className={hom.class_apply_web_ct}>
            {lectureError && (
              <p>강의 목록을 불러오지 못했습니다.</p>
            )}

            {!lectureError && lectureList.length === 0 && (
              <p>등록된 강의가 없습니다.</p>
            )}

            {lectureList.map((lecture) => (
              <ClassCtWeb
                key={lecture.lectureId}  // 응답의 lectureId 사용[image:1]
                lectureData={lecture}
                btnText="신청하기"
                eventF={() =>
                  console.log('신청 클릭', lecture.lectureId)
                }
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
