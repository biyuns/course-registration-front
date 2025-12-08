import rsvInfo from "../css/RsvInfo.module.css"

function ReservationInfo() {
    return (
        <div className={rsvInfo.infos}>
            <div>
                <p className={rsvInfo.info_0_9}>00000</p><p className={rsvInfo.info_1}>수업명</p><p className={rsvInfo.info_1}>김시은은</p><p className={rsvInfo.info_1_7}>01097206988</p><p className={rsvInfo.info_1_9}>2025.09.30 16:16</p><p className={rsvInfo.info_2_5}>kse040531@naver.com</p><div className={rsvInfo.info_1}><button>예약취소</button></div>
            </div>
        </div>
    )
}

export default ReservationInfo;