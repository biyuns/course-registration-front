import Header from "../components/Header";
import rsvInfo from "../css/RsvInfo.module.css"
import ReservationInfo from "../components/ReservationInfo";
import search from '../img/search.svg';
import ManageReserveHeader from "../components/ManageReserveHeader";

// ⭐️ 더미 예약 데이터 정의 (컴포넌트 외부에 위치)



function ManagerRsvInfo() {


    const dummyReservationData = [
        {
            "reservationId": 1,
            "userId": 2,
            "attendanceNumber": "1111",
            "parentPhoneNumber": "010-2345-6789",
            "nickname": "김학생",
            "seatNumber": "601호-10",
            "reservedAt": "2025-12-08T14:30:53.362935",
            "message": "예약자 조회 성공"
        },
        {
            "reservationId": 2,
            "userId": 3,
            "attendanceNumber": "9999",
            "parentPhoneNumber": "010-9876-5432",
            "nickname": "김아무개",
            "seatNumber": "601호-11",
            "reservedAt": "2025-12-08T14:33:35.179058",
            "message": "예약자 조회 성공"
        }
    ]



    return (
        <>
            <Header />
            <ManageReserveHeader />


            <section>
                <div className={rsvInfo.sub_title}>
                    <p>예약자 정보</p>
                    <div className={rsvInfo.search_div}>
                        <input placeholder="예약자 성함" />
                        <button><img src={search} /></button>
                    </div>
                </div>

                <div className={rsvInfo.reservations_ct}>
                    <div className={rsvInfo.top}>
                        <p className={rsvInfo.info_0_9}>예약번호</p><p className={rsvInfo.info_1}>자리번호</p><p className={rsvInfo.info_1}>예약자</p><p className={rsvInfo.info_1_7}>학부모 전화번호</p><p className={rsvInfo.info_1_9}>예약일시</p><p className={rsvInfo.info_2_1}></p><p className={rsvInfo.info_1_4}></p>
                    </div>


                    {dummyReservationData.map((data) => (
                        <ReservationInfo
                            key={data.reservationId}
                            reservationData={data}
                        />
                    ))}

                </div>
            </section>



        </>
    )
}

export default ManagerRsvInfo;