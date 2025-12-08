import Header from "../components/Header";
import rsvInfo from "../css/RsvInfo.module.css"
import ReservationInfo from "../components/ReservationInfo";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css"

function ManagerRsvInfo() {
    return (
        <>
            <Header />
            <div>
                <div>예약</div><div>가입요청</div>
            </div>
            <section className={rsvInfo.reservation_check_ct}>
                <ManageHeaderSub text="예약자 정보 확인" button="등록하기" />
                <div className={rsvRegiInfo.class_ct}>
                    <ClassCtWeb eventF="" btnText="예약정보확인" />

                    <ClassCtWeb eventF="" btnText="예약정보확인" />
                    <ClassCtWeb eventF="" btnText="예약정보확인" />
                </div>
            </section>
            <section>
                <div className={rsvInfo.sub_title}>
                    <p>예약자 정보</p>
                    <div className={rsvInfo.search_div}>
                        <input placeholder="예약자 성함" />
                        <button></button>
                    </div>
                </div>

                <div className={rsvInfo.reservations_ct}>
                    <div className={rsvInfo.top}>
                        <p className={rsvInfo.info_0_9}>예약번호</p><p className={rsvInfo.info_1}>수업명</p><p className={rsvInfo.info_1}>이름</p><p className={rsvInfo.info_1_7}>전화번호</p><p className={rsvInfo.info_1_9}>예약일시</p><p className={rsvInfo.info_2_5}>이메일</p><p className={rsvInfo.info_1}></p>
                    </div>
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />

                </div>
            </section>


        </>
    )
}

export default ManagerRsvInfo;