import classC from '../css/ClassCt.module.css';
import Navigation from '../components/Navigate';

function ClassCt({ lectureData }) {
    const { reservationpg } = Navigation();
    const {
        lectureId,
        classroomName,
        instructorName,
        subjectName,
        startTime,
        endTime,
        totalSeats,
        reservedSeats
    } = lectureData;

    const date = startTime.slice(5, 10)

    const start = startTime.slice(11, 16)
    const end = endTime.slice(11, 16)

    return (
        <div className={classC.class_ct} onClick={reservationpg}>
            <div className={classC.class_time}>
                <p className={classC.start_t}>{start}</p>
                <p className={classC.ent_t}>~{end}</p>
                <div className={classC.can_seat}>
                    <p>{reservedSeats}</p><p>|</p><p>{totalSeats}</p>
                </div>            </div>
            <div className={classC.class_info}>
                <p>{instructorName} | {classroomName} | {date}</p>
                <p>{subjectName}</p>
            </div>

        </div>
    )
}

export default ClassCt;