import HeaderSub from "../components/HeaderSub";
import TimeC from '../css/TimeCheck.module.css';
import ClassCt from "../components/ClassCt";
import Calender from "../components/Calender";
import ClassCtWeb from "../components/ClassCtWeb";
import Header from "../components/Header";


function TimeCheck() {
    return (
        <>
            <Header />
            <HeaderSub title="시간표 확인" />
            <section className={TimeC.main_time_ct}>
                <div>
                    <section className={TimeC.calender_section}>
                        <p className={TimeC.app_calender_p}>달력</p>
                        <p className={TimeC.web_calender_p}>일정안내</p>
                        <Calender />
                    </section>
                    <section className={TimeC.classes_ct}>
                        <ClassCt></ClassCt>
                        <ClassCt></ClassCt>
                        <ClassCt></ClassCt>
                    </section>
                    <section className={TimeC.classes_ct_web}>
                        <ClassCtWeb eventF="" btnText="x" />
                        <ClassCtWeb eventF="" btnText="x" />
                        <ClassCtWeb eventF="" btnText="x" />
                        <ClassCtWeb eventF="" btnText="x" />
                    </section>
                </div>
            </section>

        </>
    )
}

export default TimeCheck;