import Header from "../components/Header";
import Calender from "../components/Calender";
import ReservationForm from "../components/ReservationForm";
import rsvRegi from "../css/RsvRegi.module.css";
import ManageHeaderSub from "../components/ManageHeaderSub";

function ManagerRsvRegi() {
    return (
        <>
            <Header />
            <div>
                <div>예약</div><div>가입요청</div>
            </div>
            <section>
                <ManageHeaderSub text="날짜선택" button="다음" />
                <div className={rsvRegi.calender_ct}>
                    <Calender />
                </div>
            </section>
            <section>
                <ManageHeaderSub text="예약등록" button="등록하기" />
                <div className={rsvRegi.class_form}>
                    <ReservationForm />
                </div>
            </section>

        </>
    )
}

export default ManagerRsvRegi;