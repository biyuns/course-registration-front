import { useState } from 'react';
import rsvInfo from "../css/RsvInfo.module.css"
import TwoBtnModal from './TwoBtnModal';
import { authAPI } from './apiClient';

function ReservationInfo({ reservationData }) {

    const [isModal, setIsModal] = useState(false);

    const clickModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false);
    }

    const {
        reservationId,
        userId,
        attendanceNumber,
        parentPhoneNumber,
        nickname,
        seatNumber,
        reservedAt
    } = reservationData;



    const seat = seatNumber.slice(5, 7)
    const reservationAt1 = reservedAt.replaceAll('-', '.');
    const reservationAt2 = reservationAt1.replace('T', ' ');
    const reservationAt = reservationAt2.slice(2, 16);


    const deleteRsvUser = async () => {
        try {
            const id = reservationId

            await authAPI.managerLectureUserDelete(id);
            closeModal();
        } catch (err) {
            console.error("취소 실패:", err)
        }
    }

    return (
        <div className={`${rsvInfo.infos}`}>
            <div>
                <p className={rsvInfo.info_0_9}>{reservationId}</p>
                <p className={rsvInfo.info_1}>{seat}</p>
                <p className={rsvInfo.info_1}>{nickname}</p>
                <p className={rsvInfo.info_1_7}>{parentPhoneNumber}</p>
                <p className={rsvInfo.info_1_9}>{reservationAt}</p>
                <div className={rsvInfo.info_2_1}>
                    <button>자리 변경</button>
                </div>

                <div className={rsvInfo.info_1_4}>
                    <button onClick={clickModal}>예약 취소</button>
                </div>
            </div>
            {isModal === true && (
                <TwoBtnModal text={`${nickname} 님 예약을 취소하시겠습니까?`} btn1T="취소하기" btn2T="뒤로가기" btn1E={deleteRsvUser} btn2E={closeModal} />
            )}
        </div>
    )
}

export default ReservationInfo;