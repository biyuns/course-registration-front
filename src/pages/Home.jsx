import hom from '../css/Home.module.css';

function Home() {
    return (
        <section>
            <div className={hom.my_class}>
                <div className={hom.my_class_top}>
                    <p>내 강의 확인</p>
                </div>
                <div className={hom.my_class_info}>
                    <div className={hom.date_time_ct}>
                        <p>날짜</p><p>시간</p><div className={hom.gray_line}></div><p className={hom.seat_num}>좌석번호</p>
                    </div>
                    <div>
                        <div className={hom.gray_ct}>수업내용</div>
                        <p>강사명</p>
                    </div>
                    <div>
                        <div className={hom.gray_ct}>강사</div>
                        <p>강의명</p>
                    </div>
                    <button>강의 정보 확인하기</button>

                </div>
            </div>
            <div className={hom.class_button_ct}>
                <button className={hom.class_apply_btn}><p>강의 신청</p></button>
                <button className={hom.class_check_btn}><p>시간표 확인</p></button>
            </div>
        </section >
    )
}

export default Home