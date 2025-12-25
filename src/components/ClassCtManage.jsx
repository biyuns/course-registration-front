import Navigation from './Navigate';
import classC from '../css/ClassCt.module.css';


function ClassCtManage({ lectureData }) {

    const { movereservationInfo } = Navigation();

    const {
        subjectName,
        instructorName,
        classroomName,
        startTime,
        endTime,
        reservationOpenAt,
        reservationCloseAt
    } = lectureData;

    const monthDate = startTime.slice(5, 7)
    const dayDate = startTime.slice(8, 10)
    const time = startTime.slice(11, 16)

    const classStartTime = startTime.replace('T', ' ')

    const reservationOpen = reservationOpenAt.replace('T', ' ')
    const reservationClose = reservationCloseAt.replace('T', ' ')




    return (
        <div className={classC.class_ct_web}>
            <div className={classC.date_time_ct_web}>
                <p>{dayDate}</p>
                <p>{time}</p>
            </div>
            <div>
                <p className={classC.class_infos_web}>{instructorName} | {classroomName} | 수업일: {classStartTime}</p>
                <p className={classC.class_name_web}>{subjectName}</p>
                <p className={classC.class_book_web}>예약 기간: {reservationOpen}~{reservationClose}</p>
            </div>
            <div className={classC.two_button_ct_manage}>
                <button onClick={movereservationInfo}>예약자 조회</button>
                <button>취소하기</button>
            </div>

        </div>
    );
}

export default ClassCtManage;