import hom from '../css/Home.module.css';
import ClassCtWeb from '../components/ClassCtWeb';
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { authAPI } from '../components/apiClient';
import ClassCt from '../components/ClassCt';




function Home() {
  const { moveclassaply, movetime } = Navigation();
  const location = useLocation();

  const [myClassData, setMyClassData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [token, setToken] = useState(null);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatNum, setSeatNum] = useState('');


  const changeDate = (data) => {
    if (!data || !data.startTime) return;
    const date1 = data.startTime.slice(5, 10);
    const date2 = date1.replace('-', '.');
    setDate(date2);
    const time1 = data.startTime.slice(11, 16);
    setTime(time1);
    const seat = data.seatNumber.slice(5, 7)
    setSeatNum(seat);


  }



  useEffect(() => {


    const fetchMyLectures = async () => {
      try {
        const response = await authAPI.getMyReservations();
        if (response.data && response.data.length > 0) {
          const firstLecture = response.data[0];
          setMyClassData(firstLecture);
          // 중요: 데이터를 받은 직후에 그 데이터를 인자로 넘겨서 실행!
          changeDate(firstLecture);
        }
      } catch (err) {
        console.error("강의 목록 로딩 실패:", err);
      }
    };

    const fetchLectures = async () => {
      try {
        setLoading(true);
        const response = await authAPI.getLectureList();
        // 서버 응답 구조가 [ { ... }, { ... } ] 형태이므로 바로 저장
        setClassData(response.data);
      } catch (err) {
        console.error("강의 목록 로딩 실패:", err);
        setError(err.response?.status || 500);
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();

    const atoken = localStorage.getItem('accessToken');

    if (!atoken) {
      setToken(false);
    } else {
      setToken(true);
      fetchMyLectures();
      changeDate();
    }
  }, []);



  const NoneClass = token ? hom.block : hom.none;
  const blockClass = token ? hom.none : hom.block;


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
                  {myClassData.lectureName}
                </p>
              </div>
              <div>
                <div className={hom.gray_ct}>강사</div>
                <p>{myClassData.instructorName}</p>
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
              {classData.map((lecture) => (
                <ClassCt
                  key={lecture.lectureId}
                  lectureData={lecture}
                />
              ))}
            </div>
            <div className={hom.class_apply_web_ct}>
              {classData.map((lecture) => (
                <ClassCtWeb
                  key={lecture.lectureId}
                  lectureData={lecture}
                  btnText="신청하기"
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
