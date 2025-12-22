import myc from '../css/MyClassInfo.module.css';
import profileImg from '../img/profile-img.svg';
import backBtn from '../img/back-btn.svg';

function MyClassInfo() {
    return (
        <>
            <header className={myc.mypage_header}>
                <div>
                    <button><img src={backBtn}></img></button>
                    <p>My</p>
                </div>
            </header>
            <section className={myc.profile_section}>
                <div>
                    <img src={profileImg}></img>
                </div>
                <p>이름</p>
            </section>
            <section className={myc.my_class_margin}>
                <div className={myc.my_class_info}>
                    <div className={myc.date_time_ct}>
                        <p>10.30(토)</p>
                        <p>17:25</p>
                        <div className={myc.gray_line}></div>
                        <p className={myc.seat_num}>012번</p>
                    </div>
                    <div className={myc.flex_column}>
                        <div className={myc.gray_ct}>수업명</div>
                        <p>수업</p>
                    </div>
                    <div className={myc.flex_column}>
                        <div className={myc.gray_ct}>강사</div>
                        <p>강사명</p>
                    </div>
                    <div className={myc.my_class_btns}>
                        <button>변경하기</button>
                        <button>취소하기</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyClassInfo;