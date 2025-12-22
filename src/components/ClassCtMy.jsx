import classC from '../css/ClassCt.module.css';
import Navigation from '../components/Navigate';

function ClassCtMy() {
    const { reservationpg } = Navigation();
    return (
        <div className={classC.class_ct} onClick={reservationpg}>
            <div className={classC.class_time}>
                <p className={classC.seat_num}>012번</p>
                <p className={classC.start_time}>시작시간</p>
                <p className={classC.ent_time}>~끝 시간</p>
                <div className={classC.can_seat}>
                    <p>100</p><p>|</p><p>160</p>
                </div>
            </div>
            <div className={classC.class_info}>
                <p>강사명|강의실</p>
                <p>강의명</p>
            </div>

        </div>
    )
}

export default ClassCtMy;