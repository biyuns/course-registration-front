import Navigation from './Navigate';
import classC from '../css/ClassCt.module.css';
import myc from '../css/MyClassInfo.module.css'
import { authAPI } from '../components/apiClient';
import { useState } from 'react';



function ClassCtWeb2({ reservationData }) {

    const { reservationpg } = Navigation();
    const [isModal, setIsModal] = useState(false);

    const clickModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false);
    }

    const {
        reservationId,
        lectureName,
        instructorName,
        classroomName,
        seatNumber,
        startTime,
        endTime
    } = reservationData;

    const monthDate = startTime.slice(5, 7)
    const dayDate = startTime.slice(8, 10)
    const time = startTime.slice(11, 16)

    const classStartTime = startTime.replace('T', ' ')


    //예약 취소 연동
    const deleteSeat = async () => {
        try {
            const id = reservationId;

            await authAPI.deleteReservation(id);

            closeModal();

        } catch (err) {
            console.error("취소 실패:", err);
        }
    };


    return (
        <div className={classC.class_ct_web}>
            <div className={classC.date_time_ct_web}>
                <p>{dayDate}</p>
                <p>{time}</p>
            </div>
            <div>
                <p className={classC.class_infos_web}>{instructorName} | {classroomName} | 수업일: {classStartTime}</p>
                <p className={classC.class_name_web}>{lectureName}</p>
                <p className={classC.class_book_web}>예약 기간: { }</p>
            </div>
            <div className={classC.two_button_ct}>
                <button>변경하기</button>
                <button onClick={clickModal}>취소하기</button>
            </div>
            {isModal === true && (
                <section className={myc.modal}>
                    <div>
                        <p>취소하시겠습니까?<br />취소 후엔 수업을 다시 예약해야 합니다.</p>
                        <div>
                            <button onClick={deleteSeat}>취소하기</button>
                            <button onClick={closeModal}>뒤로가기</button>
                        </div>
                    </div>
                </section>

            )}
        </div>
    );
}

export default ClassCtWeb2;