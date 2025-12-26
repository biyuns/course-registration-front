import rsvRegi from "../css/RsvRegi.module.css";
import { useState, useEffect } from 'react';
import { authAPI } from '../components/apiClient';
import TimeForm from "./TimeForm";
import DateForm from "./DateForm";

function ReservationForm() {

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
    const [startHour, setStartHour] = useState()
    const [startMin, setStartMin] = useState()
    const [endHour, setEndHour] = useState()
    const [endMin, setEndMin] = useState()

    const [rsvStartHour, setRsvStartHour] = useState()
    const [rsvStartMin, setRsvStartMin] = useState()
    const [rsvEndHour, setRsvEndHour] = useState()
    const [rsvEndMin, setRsvEndMin] = useState()


    //강사, 과목, 강의실 조회 연동
    useEffect(() => {
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

    return (
        <form className={rsvRegi.reservation_form}>
            {/* 기본 정보 입력 */}
            <section className={rsvRegi.select_top}>
                <div>
                    <label className={rsvRegi.labels} htmlFor="subject">과목명</label>
                    <select id="subject" >
                        <option value="">과목 선택</option>
                        {subject.map((sub) => (
                            <option key={sub.id} value={sub.id}>{sub.subjectName}</option>
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
                            <option key={room.id} value={room.id}>{room.roomNumber}호</option>
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
    );
}

export default ReservationForm;