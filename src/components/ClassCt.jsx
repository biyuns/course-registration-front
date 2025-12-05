import classC from '../css/ClassCt.module.css';

function ClassCt() {
    return (
        <div className={classC.class_ct}>
            <div className={classC.class_time}>
                <p>시작시간</p>
                <p>~끝 시간</p>
                <div className={classC.can_seat}>100|116</div>
            </div>
            <div className={classC.class_info}>
                <p>강사명|강의실</p>
                <p>강의명</p>
            </div>

        </div>
    )
}

export default ClassCt;