import Header from "../components/Header";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageReserveHeader from "../components/ManageReserveHeader";


function ManagerRsvRegiInfo() {
    return (
        <>
            <Header />
            <ManageReserveHeader/>
            <section>
                <ManageHeaderSub text="예약등록정보" button="등록하기" />
                <div className={rsvRegiInfo.class_ct}>
                    <ClassCtWeb eventF="" btnText="예약취소" />

                    <ClassCtWeb eventF="" btnText="예약취소" />
                    <ClassCtWeb eventF="" btnText="예약취소" />
                </div>
            </section>

        </>
    )
}

export default ManagerRsvRegiInfo;