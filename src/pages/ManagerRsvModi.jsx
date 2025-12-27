import Header from "../components/Header";
import ManageReserveHeader from "../components/ManageReserveHeader";
import ReservationModi from "../components/ReservationModi";

function ManagerRsvModi() {
    return (
        <>
            <Header />
            <ManageReserveHeader />

            <section>
                <ReservationModi />
            </section>
        </>
    )
}

export default ManagerRsvModi;