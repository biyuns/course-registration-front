import rsvRegi from "../css/RsvRegi.module.css";
import { useState, useEffect } from 'react';
import { authAPI } from '../components/apiClient';
import TimeForm from "./TimeForm";
import DateForm from "./DateForm";
import HeadSub from '../css/HeaderSub.module.css';


function ReservationModi() {

    const now = new Date();
    const currentYear = now.getFullYear();

    //강사, 과목, 강의실 조회
    const [instructor, setInstructor] = useState([]);
    const [subject, setSubject] = useState([]);
    const [classroom, setClassroom] = useState([]);


    // 수업 날짜, 시작 날짜, 종료 날짜
    const [classYear, setClassYear] = useState(currentYear);
    const [classMonth, setClassMonth] = useState(now.getMonth() + 1);
    const [classDay, setClassDay] = useState(now.getDate());

    const [startYear, setStartYear] = useState(currentYear);
    const [startMonth, setStartMonth] = useState(now.getMonth() + 1);
    const [startDay, setStartDay] = useState(now.getDate());

    const [endYear, setEndYear] = useState(currentYear);
    const [endMonth, setEndMonth] = useState(now.getMonth() + 1);
    const [endDay, setEndDay] = useState(now.getDate());

    //수업 시작 시간, 끝 시간, 예약 시작 시간, 끝 시간
    const [startHour, setStartHour] = useState("00")
    const [startMin, setStartMin] = useState("00")
    const [endHour, setEndHour] = useState("00")
    const [endMin, setEndMin] = useState("00")

    const [rsvStartHour, setRsvStartHour] = useState("00")
    const [rsvStartMin, setRsvStartMin] = useState("00")
    const [rsvEndHour, setRsvEndHour] = useState("00")
    const [rsvEndMin, setRsvEndMin] = useState("00")

    //강의 조회용
    const [classInfo, setClassInfo] = useState([]);
    const [lectureData, setLectureData] = useState([])

    //강의 밸류값 세팅
    const valueSetting = () => {
        const {
            lectureId,
            classroomId,
            classroomName,
            instructorId,
            instructorName,
            subjectId,
            subjectName,
            startTime,
            endTime,
            reservationOpenAt,
            reservationCloseAt,
            totalSeats
        } = classInfo;

        const dateChange = (date, setYear, setMonth, setDay) => {
            setYear(date.slice(0, 4))
            setMonth(date.slice(5, 7))
            setDay(date.slice(8, 10))
        }
        dateChange(startTime, setClassYear, setClassMonth, setClassDay)
        dateChange(reservationOpenAt, setStartYear, setStartMonth, setStartDay)
        dateChange(reservationCloseAt, setEndYear, setEndMonth, setEndDay)

        const timeChange = (time, setHour, setMin) => {
            setHour(time.slice(11, 13))
            setMin(time.slice(14, 16))
        }
        timeChange(startTime, setStartHour, setStartMin)
        timeChange(endTime, setEndHour, setEndMin)
        timeChange(reservationOpenAt, setRsvStartHour, setRsvStartMin)
        timeChange(reservationCloseAt, setRsvEndHour, setRsvEndMin)

        setInstructor(instructorId);
        setSubject(subjectId);
        setClassroom(classroomId);
    }


    //강사, 과목, 강의실 조회 연동
    useEffect(() => {

        //강의 조회 
        const lectureString = window.localStorage.getItem('lecture');
        if (lectureString) {
            setLectureData(JSON.parse(lectureString));
        }

        const fetchClassInfo = async () => {
            try {
                const id = lectureData.lectureId
                const response = await authAPI.checkLectureInfo(id);
                setClassInfo(response.data);

                valueSetting();


            } catch (err) {
                console.log('강의 세부 조회 실패: ', err)
            }
        }

        fetchClassInfo();

        //강사, 과목명, 강의실 조회
        const fetchData = async () => {

            try {
                const [resInstructors, resSubjects, resClassrooms] = await Promise.all([
                    authAPI.instructorsAdd(),
                    authAPI.subjectsAdd(),
                    authAPI.classroomsAdd()
                ]);

                setInstructor(resInstructors.data); // 강사 목록
                setSubject(resSubjects.data);       // 과목 목록
                setClassroom(resClassrooms.data);   // 강의실 목록

            } catch (err) {
                console.error("데이터 로딩 실패:", err);
            }
        };

        fetchData();
    }, []);


    const nextLectureModi = () => {

        const startTime = `${classYear}-${classMonth}-${classDay}T${startHour}:${startMin}:00`;
        const endTime = `${classYear}-${classMonth}-${classDay}T${endHour}:${endMin}:00`;
        const reservationOpenAt = `${startYear}-${startMonth}-${startDay}T${rsvStartHour}:${rsvEndMin}:00`;
        const reservationCloseAt = `${endYear}-${endMonth}-${endDay}T${rsvEndHour}:${rsvEndMin}:00`;

        const requestData = {
            classroomId: classroom,
            instructorId: instructor,
            subjectId: subject,
            startTime: startTime,
            endTime: endTime,
            reservationOpenAt: reservationOpenAt,
            reservationCloseAt: reservationCloseAt

        };



        const requestString = JSON.stringify(requestData);

        window.localStorage.setItem('request', requestString);


    }









    return (
        <>
            <div className={HeadSub.sub_title}>
                <p>강의 수정</p>
                <div>
                    <button >이전</button>
                    <button onClick={nextLectureModi}>다음</button>
                </div>
            </div>
            <div className={rsvRegi.class_form}>
                <form className={rsvRegi.reservation_form}>
                    {/* 기본 정보 입력 */}
                    <section className={rsvRegi.select_top}>
                        <div>
                            <label className={rsvRegi.labels} htmlFor="subject">과목명</label>
                            <select id="subject" >
                                <option value="">과목 선택</option>
                                {subject.map((sub) => (
                                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className={rsvRegi.labels} htmlFor="lecturer">강사</label>
                            <select id="lecturer">
                                <option value="">강사 선택</option>
                                {instructor.map((inst) => (
                                    <option key={inst.id} value={inst.id}>{inst.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className={rsvRegi.labels} htmlFor="classroom">강의실</label>
                            <select id="classroom">
                                <option value="">강의실 선택</option>
                                {classroom.map((room) => (
                                    <option key={room.id} value={room.id}>{room.classroomNum}호 {room.totalSeat}좌석</option>
                                ))}
                            </select>
                        </div>
                    </section>


                    {/* 수업 날짜 섹션 */}
                    <section className={rsvRegi.select_bottom}>
                        <div>
                            <p className={rsvRegi.labels}>수업 날짜</p>
                            <DateForm
                                stateYear={classYear}
                                stateSetYear={setClassYear}
                                stateMonth={classMonth}
                                stateSetMonth={setClassMonth}
                                stateDay={classDay}
                                stateSetDay={setClassDay}
                            />
                        </div>

                        {/* 수업 시간 섹션 */}
                        <div>
                            <p className={rsvRegi.labels}>수업시간</p>
                            <TimeForm
                                stateHour={startHour}
                                stateSetHour={setStartHour}
                                stateMin={startMin}
                                stateSetMin={setStartMin}
                            />
                            <span> - </span>
                            <TimeForm
                                stateHour={endHour}
                                stateSetHour={setEndHour}
                                stateMin={endMin}
                                stateSetMin={setEndMin}
                            />
                        </div>


                        <div className={rsvRegi.gray_line}></div>

                        {/* 예약 기간 섹션 */}
                        <div>
                            <p className={rsvRegi.labels}>예약 기간</p>
                            {/* 시작 날짜 */}
                            <DateForm
                                stateYear={startYear}
                                stateSetYear={setStartYear}
                                stateMonth={startMonth}
                                stateSetMonth={setStartMonth}
                                stateDay={startDay}
                                stateSetDay={setStartDay}
                            />

                            <span> - </span>

                            {/* 종료 날짜 */}
                            <DateForm
                                stateYear={endYear}
                                stateSetYear={setEndYear}
                                stateMonth={endMonth}
                                stateSetMonth={setEndMonth}
                                stateDay={endDay}
                                stateSetDay={setEndDay}
                            />
                        </div>

                        {/* 예약 시간 섹션 */}
                        <div>
                            <p className={rsvRegi.labels}>예약시간</p>
                            <TimeForm
                                stateHour={rsvStartHour}
                                stateSetHour={setRsvStartHour}
                                stateMin={rsvStartMin}
                                stateSetMin={setRsvStartMin}
                            />
                            <span> - </span>
                            <TimeForm
                                stateHour={rsvEndHour}
                                stateSetHour={setRsvEndHour}
                                stateMin={rsvEndMin}
                                stateSetMin={setRsvEndMin}
                            />
                        </div>

                    </section>
                </form>
            </div>
        </>
    );
}

export default ReservationModi;