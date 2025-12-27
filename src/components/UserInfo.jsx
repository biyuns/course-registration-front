import React, { useState } from 'react';
import rsvInfo from "../css/RsvInfo.module.css"
import { authAPI } from './apiClient';

function UserInfo({ userInfo, btn }) {

    const {
        userId,
        nickname,
        email,
        attendanceNumber,
        parentPhoneNumber,
        createdDate
    } = userInfo;

    const createdAt1 = createdDate.replaceAll('-', '.');
    const createdAt2 = createdAt1.replace('T', ' ');
    const createdAt = createdAt2.slice(2, 16);

    const fetchAcessUser = async () => {
        try {
            const id = userId;
            await authAPI.managerAcessUser(id)
        } catch (err) {
            console.error("회원 승인 실패:", err)
        }
    }


    return (
        <div className={rsvInfo.infos}>
            <div>
                <p className={rsvInfo.info_1_5}>{attendanceNumber}</p>
                <p className={rsvInfo.info_1_5}>{nickname}</p>
                <p className={rsvInfo.info_2}>{parentPhoneNumber}</p>
                <p className={rsvInfo.info_2}>{createdAt}</p>
                <p className={rsvInfo.info_2}>{email}</p>
                <div className={rsvInfo.info_1_btn}>
                    {btn === true && (
                        <button onClick={() => (fetchAcessUser())}>승인하기</button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default UserInfo;