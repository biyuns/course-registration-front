import Navigation from './Navigate';
import classC from '../css/ClassCt.module.css';
import { authAPI } from './apiClient';


function ClassCtManage({ lectureData }) {

    const { movereservationInfo } = Navigation();

    const {
        lectureId,
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

    const sendData = () => {
        const lectureData = {
            lectureId: lectureId,
        }

        const lectureString = JSON.stringify(lectureData);

        window.localStorage.setItem('lecture', lectureString);
    }



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
                <button onClick={() => {
                    sendData();
                    movereservationInfo();
                }}>예약자 조회</button>
                <button>강의 조회</button>
            </div>

        </div >
    );
}

export default ClassCtManage;