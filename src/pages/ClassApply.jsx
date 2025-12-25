import classA from '../css/ClassApply.module.css';
import ClassCt from '../components/ClassCt';
import Dates from '../components/Dates';
import HeaderSub from '../components/HeaderSub';
import { useEffect, useState } from 'react';
import { authAPI } from '../components/apiClient';


function ClassApply() {

    const [classData, setClassData] = useState([]);
    const [selectData, setSelectData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [calenderInfo, setCalenderInfo] = useState([])

    const [totalDates, setTotalDates] = useState([]);

    useEffect(() => {
        getCalendarData()
    }, []);


    /* 현재 시점의 달력 정보만 반환하는 함수 */
    function getCalendarData() {
        const today = new Date();

        const tempArray = [];

        for (let i = 0; i < 5; i++) {
            const futureDate = new Date(today);
            futureDate.setDate(today.getDate() + i);

            const month = futureDate.getMonth() + 1;
            const date = futureDate.getDate();

            tempArray.push({
                month: month,
                date: date
            });
        }

        setCalenderInfo(tempArray);
    }

    //연동
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
            <HeaderSub title="수강신청" />
            <section className={classA.select_date_ct}>
                <p>날짜</p>
                <div>
                    {calenderInfo.map((i, index) => (
                        <Dates
                            key={index}
                            month={i.month}
                            day={i.date}
                            clickDate={() => clickDate(i.date)} />
                    ))}

                </div>
            </section>
            <section className={classA.classes_ct}>
                {selectData.map((lecture) => (
                    <ClassCt
                        key={lecture.lectureId}
                        lectureData={lecture}
                    />
                ))}
            </section>
            <button className={classA.book_button}>
                예약하기
            </button>
        </>
    )
}

export default ClassApply;