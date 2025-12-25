import { useEffect, useState } from "react";
import MyPageDatail from "../components/MyPageDetail";
import myp from '../css/MyPage.module.css'
import profileImg from '../img/profile-img.svg';
import backBtn from '../img/back-btn.svg';
import Header from "../components/Header";
import { authAPI } from '../components/apiClient';
import Navigation from "../components/Navigate";
import myc from '../css/MyClassInfo.module.css';


function MyInfo() {

    const { movechangeparentphone, movechangepassword } = Navigation();

    const [myInfo, setMyInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [infoChange, setInfoChange] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const clickModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false);
    }

    useEffect(() => {

        //연동
        const fetchData = async () => {
            setLoading(true);
            try {
                const [resInfo] = await Promise.all([
                    authAPI.getMyInfo()
                ]);

                setMyInfo(resInfo.data);
            } catch (err) {
                console.error("데이터 로딩 실패:", err);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const fetchSecession = async () => {
        try {
            const response = await authAPI.secessionUser({
                username: myInfo.username
            })

            if (response === true) {
                setIsModal(false)
            }
        } catch (err) {
            console.error("탈퇴 실패:", err);
        }
    }

    //화면 바뀜
    const userInfoClick = () => {
        setInfoChange(true);
    }




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
                <div><img src={profileImg} alt="프로필" /></div>
                <p className={myp.my_name}>{myInfo.nickname || "사용자"}님</p>
                <p className={myp.my_id}>{myInfo.username || "아이디 정보 없음"}</p>
                <button className={myp.app}>로그아웃</button>

            </section>

            <div className={myp.gray_div}></div>
            {infoChange ? (
                <MyPageDatail oneT="비밀번호 변경" twoT="학부모 전화번호 변경" oneE={movechangepassword} twoE={movechangeparentphone}></MyPageDatail>

            ) : (
                <MyPageDatail oneT="회원정보 관리" twoT="회원 탈퇴" oneE={userInfoClick} twoE={clickModal}></MyPageDatail>

            )}

            {isModal === true && (
                <section className={myc.modal}>
                    <div>
                        <p>회원 탈퇴를 하시겠습니까?<br />탈퇴 후엔 다시 회원가입 해야 합니다.</p>
                        <div>
                            <button onClick={fetchSecession}>탈퇴하기</button>
                            <button onClick={closeModal}>뒤로가기</button>
                        </div>
                    </div>
                </section>

            )}

        </>
    )
}

export default MyInfo;