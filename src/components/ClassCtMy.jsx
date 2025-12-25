import classC from '../css/ClassCt.module.css';
import Navigation from '../components/Navigate';

function ClassCtMy({ reservationData }) {
    const { movemyclassinfo } = Navigation();

    const {
        reservationId,
        lectureName,
        instructorName,
        classroomName,
        seatNumber,
        startTime,
        endTime
    } = reservationData;


    const start = startTime.slice(11, 16)
    const end = endTime.slice(11, 16)

    const seat = seatNumber.slice(5, 7)

    const sendData = () => {
        const classData = {
            reservationId: reservationId,
            lectureName: lectureName,
            instructorName: instructorName,
            classroomName: classroomName,
            seat: seat,
            start: start,
            end: end
        }

        const classString = JSON.stringify(classData);

        window.localStorage.setItem('class', classString);
    }


    return (
        <div className={classC.class_ct} onClick={() => {
            sendData();
            movemyclassinfo();

        }}>
            <div className={classC.class_time}>
                <p className={classC.seat_num}>{seat}번</p>
                <p className={classC.start_time}>{start}</p>
                <p className={classC.ent_time}>~{end}</p>
                <div className={classC.can_seat}>
                    <p>100</p><p>|</p><p>160</p>
                </div>
            </div>
            <div className={classC.class_info}>
                <p>{instructorName} | {classroomName}</p>
                <p>{lectureName}</p>
            </div>

        </div>
    )
}

export default ClassCtMy;