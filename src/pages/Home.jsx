import hom from '../css/Home.module.css';
import ClassCtWeb from '../components/ClassCtWeb';
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const { moveclassaply, movetime } = Navigation();
    const [myClassData, setMyClassData] = useState([]);
    const [error, setError] = useState();

    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const fetchMyClassData = async () => {
        try {
            setError(null);
            const res = await axios.get();

            setMyClassData(res.data[0]);
            setDate(myClassData.startTime.slice(5, 9));
            setTime(myClassData.startTime.slice(11, 15))
        } catch (error) {
            if (error.response) {
                const httpStatus = error.response.status;
                setError(httpStatus);

            }

        }
    }

    useEffect(() => {
        fetchMyClassData();

    }, []);


    const isError404 = error === 404;
    const NoneClass = isError404 ? hom.block : hom.none;
    const blockClass = isError404 ? hom.none : hom.block;


    return (
        <>

            <Header />
            <section className={hom.main_home_ct}>
                <div className={hom.my_class}>
                    <div className={hom.my_class_top}>
                        <p>내 강의 확인</p>
                    </div>
                    <div className={`${NoneClass} ${hom.none_class}`}>
                        강의 정보가 없습니다.
                    </div>
                    <div className={`${hom.my_class_info} ${blockClass}`}>
                        <div className={hom.date_time_ct}>
                            <p>{date}</p><p>{time}</p><div className={hom.gray_line}></div><p className={hom.seat_num}>{myClassData.seatNumber}</p>
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

            </section >
        </>
    )
}

export default Home