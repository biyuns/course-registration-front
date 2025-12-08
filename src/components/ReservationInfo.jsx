import React, { useState } from 'react';
import rsvInfo from "../css/RsvInfo.module.css"

function ReservationInfo({ reservationData }) {
    // 1. 버튼 색상 관리를 위한 상태
    const [isBlack, setIsBlack] = useState(false);

    // ⭐️ 2. 버튼 텍스트 관리를 위한 상태 추가
    const [buttonText, setButtonText] = useState('예약취소');

    // 3. 버튼 클릭 시 호출될 함수를 정의합니다.
    const handleClick = () => {
        // 현재 상태가 '예약취소'일 때만 동작하도록 분기
        if (buttonText === '예약취소') {
            // A. 취소 처리 로직 (실제 API 호출은 여기에 위치)
            console.log("예약 취소 처리 로직 실행...");

            // B. 상태 업데이트
            setIsBlack(true); // 버튼 색상을 black으로 변경 (취소 완료 상태)
            setButtonText('취소 완료'); // 버튼 텍스트를 '취소 완료'로 변경
        }

        // 버튼이 이미 '취소 완료' 상태라면 아무것도 하지 않습니다.
    };

    // 4. CSS 모듈 객체(rsvInfo)를 사용하여 'black' 클래스를 참조합니다.
    const dynamicBlackClass = isBlack ? rsvInfo.black : '';

    // 기본 스타일은 CSS 선택자에 의해 적용되므로 동적 클래스만 전달
    const buttonDynamicClass = dynamicBlackClass;


    return (
        <div className={rsvInfo.infos}>
            <div>
                <p className={rsvInfo.info_0_9}>{reservationData.id}</p>
                <p className={rsvInfo.info_1}>{reservationData.subject}</p>
                <p className={rsvInfo.info_1}>{reservationData.instructor}</p>
                <p className={rsvInfo.info_1_7}>{reservationData.phone}</p>
                <p className={rsvInfo.info_1_9}>{reservationData.reservationTime}</p>
                <p className={rsvInfo.info_2_5}>{reservationData.email}</p>

                <div className={rsvInfo.info_1_btn_ct}>
                    <button
                        onClick={handleClick}
                        className={buttonDynamicClass}
                    >
                        {/* ⭐️ 버튼 텍스트에 상태를 연결합니다. */}
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReservationInfo;