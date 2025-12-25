import Header from "../components/Header";
import Calender from "../components/Calender";
import ReservationForm from "../components/ReservationForm";
import rsvRegi from "../css/RsvRegi.module.css";
import ManageHeaderSub from "../components/ManageHeaderSub";
import ManageReserveHeader from "../components/ManageReserveHeader";

function ManagerRsvRegi() {


    return (
        <>
            <Header />
            <ManageReserveHeader />

            <section>
                <ManageHeaderSub text="예약등록" button="다음" />
                <div className={rsvRegi.class_form}>
                    <ReservationForm />
                </div>
            </section>


        </>
    )
}

export default ManagerRsvRegi;