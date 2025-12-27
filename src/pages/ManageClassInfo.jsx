import rsvRegi from '../css/RsvRegi.module.css'
import DateShow from '../components/DateShow';
import TimeShow from '../components/TimeShow';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { authAPI } from '../components/apiClient';
import HeadSub from '../css/HeaderSub.module.css';
import Navigation from '../components/Navigate';
import ManageReserveHeader from "../components/ManageReserveHeader";

function ManageClassInfo() {

    const { movemanageclassmodi } = Navigation();

    const [classInfo, setClassInfo] = useState(null);
    const [lectureData, setLectureData] = useState(null);

    useEffect(() => {
        const lectureString = window.localStorage.getItem('lecture');

        if (lectureString) {
            const parsedData = JSON.parse(lectureString);
            setLectureData(parsedData);

            const fetchClassInfo = async (id) => {
                try {
                    const response = await authAPI.checkLectureInfo(id);
                    setClassInfo(response.data);
                } catch (err) {
                    console.log('강의 세부 조회 실패: ', err);
                }
            };

            fetchClassInfo(parsedData.lectureId);
        }
    }, []);

    if (!classInfo) {
        return (
            <>
                <Header />
                <div style={{ padding: '20px', textAlign: 'center' }}>데이터를 불러오는 중입니다...</div>
            </>
        );
    }

    return (
        <div className='term-all-scroll-ct' >
            <Header />
            <ManageReserveHeader />

            <div className={HeadSub.sub_title}>
                <p>강의 조회</p>
                <div>
                    <button type="button">이전</button>
                    <button type="button" onClick={movemanageclassmodi}>수정하기</button>
                </div>
            </div>
            <div className={rsvRegi.class_form}>
                <div className={rsvRegi.reservation_form}>
                    <section className={rsvRegi.select_top}>
                        <div>
                            <label className={rsvRegi.labels}>과목명</label>
                            <p className={rsvRegi.showP}>{classInfo.subjectName}</p>
                        </div>
                        <div>
                            <label className={rsvRegi.labels}>강사</label>
                            <p className={rsvRegi.showP}>{classInfo.instructorName}</p>
                        </div>
                        <div>
                            <label className={rsvRegi.labels}>강의실</label>
                            <p className={rsvRegi.showP}>
                                {classInfo.classroomName} ({classInfo.totalSeats || classInfo.totalSeat}명)
                            </p>
                        </div>
                    </section>

                    <section className={rsvRegi.select_bottom}>
                        <div>
                            <p className={rsvRegi.labels}>수업 날짜</p>
                            <DateShow classInfo={classInfo.startTime} />
                        </div>
                        <div>
                            <p className={rsvRegi.labels}>수업시간</p>
                            <TimeShow classInfo={classInfo.startTime} />
                            <span> - </span>
                            <TimeShow classInfo={classInfo.endTime} />
                        </div>

                        <div className={rsvRegi.gray_line}></div>

                        <div>
                            <p className={rsvRegi.labels}>예약 기간</p>
                            <DateShow classInfo={classInfo.reservationOpenAt} />
                            <span> - </span>
                            <DateShow classInfo={classInfo.reservationCloseAt} />
                        </div>
                        <div>
                            <p className={rsvRegi.labels}>예약시간</p>
                            <TimeShow classInfo={classInfo.reservationOpenAt} />
                            <span> - </span>
                            <TimeShow classInfo={classInfo.reservationCloseAt} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ManageClassInfo;