import classA from '../css/ClassApply.module.css';
import ClassCt from '../components/ClassCt';
import Date from '../components/Date';
import HeaderSub from '../components/HeaderSub';

function ClassApply() {
    return (
        <>
            <HeaderSub title="수강신청" />
            <section className={classA.select_date_ct}>
                <p>날짜</p>
                <div>
                    <Date /><Date /><Date /><Date /><Date />
                </div>
            </section>
            <section className={classA.classes_ct}>
                <ClassCt></ClassCt>
                <ClassCt></ClassCt>
                <ClassCt></ClassCt>
            </section>
            <button className={classA.book_button}>
                예약하기
            </button>
        </>
    )
}

export default ClassApply;