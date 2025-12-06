import HeaderSub from "../components/HeaderSub";
import TimeC from '../css/TimeCheck.module.css';
import ClassCt from "../components/ClassCt";
import Calender from "../components/Calender";

function TimeCheck() {
    return (
        <>
            <HeaderSub title="시간표 확인" />
            <section className={TimeC.calender_section}>
                <p>달력</p>
                <Calender />
            </section>
            <section className={TimeC.classes_ct}>
                <ClassCt></ClassCt>
                <ClassCt></ClassCt>
                <ClassCt></ClassCt>
            </section>

        </>
    )
}

export default TimeCheck;