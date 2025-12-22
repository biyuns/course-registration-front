import hom from '../css/Home.module.css';
import ClassCtWeb from '../components/ClassCtWeb';
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { authAPI } from '../components/apiClient';
import ClassCt from '../components/ClassCt';

const dummyLectureList = [
  {
    startTime: "2025-12-1 T18:00:00",
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

function Home() {
  const { moveclassaply, movetime } = Navigation();
  const location = useLocation();

  const [myClassData, setMyClassData] = useState(null);
  const [error, setError] = useState(null);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatNum, setSeatNum] = useState('');

  // 1) 내 기존 강의 정보 API
  const fetchMyClassData = async () => {
    try {
      setError(null);
      const res = await authAPI.getMyReservations();
      const reservationData = res.data[0];

      if (reservationData) {
        const startTime = reservationData.startTime;
        const monthDay = startTime.slice(5, 10).replace('-', '/');
        const hourMinute = startTime.slice(11, 16);

        setMyClassData(reservationData);
        setDate(monthDay);
        setTime(hourMinute);
        setSeatNum(reservationData.seatNumber);
      } else {
        setMyClassData(null);
        setError(404);
      }
    } catch (error) {
      if (error.response) setError(error.response.status);
      else setError('NETWORK_ERROR');
      setMyClassData(null);
    }
  };

  //   useEffect(() => {
  //     fetchMyClassData();
  //   }, []);

  // 2) 좌석 예매 페이지에서 넘어온 예약 정보가 있으면 그걸 우선 사용
  useEffect(() => {
    if (location.state) {
      const { dateText, title, teacher, classroom, seatNumber } = location.state;

      // "2025-12-1 18:00" → 날짜/시간 분리
      const [d, t] = dateText.split(' ');
      const monthDay = d.slice(5).replace('-', '/'); // "12-1" → "12/1"

      setMyClassData({
        lectureName: title,
        instructorName: teacher,
        classroomName: classroom,
      });
      setDate(monthDay);
      setTime(t);
      setSeatNum(`${seatNumber}번`);
      setError(null);
    }
  }, [location.state]);

  const isErrorOrNoData = error === 404 || myClassData === null;
  const NoneClass = isErrorOrNoData ? hom.block : hom.none;
  const blockClass = isErrorOrNoData ? hom.none : hom.block;

  // 신청하기 카드 클릭 시 (지금은 콘솔만)
  const handleLectureClick = (lecture) => {
    console.log('신청하기 클릭:', lecture.subjectName);
  };

  return (
    <>
      <Header />
      <section className={hom.main_home_ct}>
        <div>
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
              <div className={hom.date_time_ct}>
                <p>{date}</p>
                <p>{time}</p>
                <div className={hom.gray_line}></div>
                <p className={hom.seat_num}>{seatNum}</p>
              </div>
              <div>
                <div className={hom.gray_ct}>수업명</div>
                <p>
                  {myClassData
                    ? myClassData.lectureName ||
                    myClassData.subjectName ||
                    '[정규반] 국어'
                    : ''}
                </p>
              </div>
              <div>
                <div className={hom.gray_ct}>강사</div>
                <p>{myClassData ? myClassData.instructorName : ''}</p>
              </div>
              <button>강의 정보 확인하기</button>
            </div>
          </div>

          <div className={hom.class_button_ct}>
            <button className={hom.class_apply_btn} onClick={moveclassaply}>
              <p>수업 신청</p>
            </button>

          </div>

          <section className={hom.home_bottom}>
            <div className={hom.gray_hr}>
              <div>수강정보</div>
            </div>
            <div className={hom.class_apply_app_ct}>
              <ClassCt />
              <ClassCt />
            </div>
            <div className={hom.class_apply_web_ct}>
              {dummyLectureList.map((lecture, index) => (
                <ClassCtWeb
                  key={index}
                  lectureData={lecture}
                  btnText="신청하기"
                  click={() => handleLectureClick(lecture)}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Home;
