import ClassCtMy from "../components/ClassCtMy";
import myp from '../css/MyPage.module.css';
import profileImg from '../img/profile-img.svg';
import backBtn from '../img/back-btn.svg';
import Header from "../components/Header";
import ClassCtWeb2 from "../components/ClassCtWeb2";

function MyPage() {
    return (
        <>
            <Header />
            <header className={myp.mypage_header}>
                <div>
                    <button><img src={backBtn}></img></button>
                    <p>My</p>
                </div>
            </header>
            <section className={myp.profile_section}>
                <div>
                    <img src={profileImg}></img>
                </div>

                <p className={myp.my_name}>이름</p>
                <p className={myp.my_id}>asbs</p>
                <button>로그인</button>
            </section>
            <div className={myp.gray_div}></div>
            <section>
                <div className={myp.my_class_info_header}>
                    <p>내 강의 신청 정보</p>
                </div>
                <div className={myp.my_classes}>
                    <ClassCtMy />
                </div>
                <div className={myp.my_classes_web}>
                    <ClassCtWeb2 />
                    <ClassCtWeb2 />
                </div>
            </section>

        </>
    )
}

export default MyPage;