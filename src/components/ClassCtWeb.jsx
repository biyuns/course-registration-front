import classC from '../css/ClassCt.module.css';

function ClassCtWeb({ eventF, btnText }) {
    return (
        <div className={classC.class_ct_web}>
            <div className={classC.date_time_ct_web}>
                <p>11(토)</p>
                <p>18:50</p>
            </div>
            <div>
                <p className={classC.class_infos_web}>강사 | 강의실 | 수업일: (토)</p>
                <p className={classC.class_name_web}>강의 명</p>
                <p className={classC.class_book_web}>예약 기간</p>
            </div>
            <button onClick={eventF}>
                {btnText}
            </button>
        </div>
    )
}

export default ClassCtWeb;