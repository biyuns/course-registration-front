import Navigation from './Navigate';
import classC from '../css/ClassCt.module.css';


function ClassCtWeb2({ btnText }) {

    const { reservationpg } = Navigation();

    return (
        <div className={classC.class_ct_web}>
            <div className={classC.date_time_ct_web}>
                <p>date</p>
                <p>time</p>
            </div>
            <div>
                <p className={classC.class_infos_web}>info</p>
                <p className={classC.class_name_web}>과목 이름</p>
                <p className={classC.class_book_web}>예약 기간:</p>
            </div>
            {/* ⭐️ 통합 이벤트 핸들러를 버튼에 연결 */}
            <div className={classC.two_button_ct}>
                <button>변경하기</button>
                <button>취소하기</button>
            </div>

        </div>
    );
}

export default ClassCtWeb2;