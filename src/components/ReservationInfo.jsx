import React, { useState } from 'react';
import rsvInfo from "../css/RsvInfo.module.css"

function ReservationInfo({ reservationData }) {

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

    return (
        <div className={rsvInfo.infos}>
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
                    <button>예약 취소</button>
                </div>
            </div>
        </div>
    )
}

export default ReservationInfo;