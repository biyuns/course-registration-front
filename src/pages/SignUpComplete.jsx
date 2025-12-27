import Header from "../components/Header"
import CompleteCircle from '../img/complete-round.svg';
import CompleteCheck from '../img/complete-check.svg'

import '../css/SignUpComplete.css'
import Navigation from "../components/Navigate";
import { useEffect, useState } from "react";
import { authAPI } from "../components/apiClient";
import SignupTop2 from "../components/SignupTop2";
import SignupTermDesktop from "../components/SignupTermDesktop";

export default function SignUpComplete() {
    const { loginpg } = Navigation()

    const [name, setName] = useState('');
    const [attendanceNumber, setAttendanceNumber] = useState('');

    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const res = await authAPI.signupcomplete();
    //             // 백엔드 응답 예: { username, social, nickname, email, attendanceNumber } 등[image:1]
    //             setName(res.data.nickname);          // 또는 res.data.username
    //             setAttendanceNumber(res.data.attendanceNumber);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     };
    //     fetchUserInfo();
    // }, []);
    return (
        <div className="media-ct term-all-scroll-ct">
            <Header />
            <SignupTop2 step={3}/>
            <SignupTermDesktop step={3} />
            <section className="signup-complete-ct">
                <p className="complete-title"> 시대원학원 회원가입 </p>

                <div className="complete-check-img-ct">
                    <img src={CompleteCircle} alt="" />
                    <img className="completecheck-img" src={CompleteCheck} alt="체크표시" />
                </div>

                <p className="complete-message"> 회원가입 완료</p>

                <p className="complete-inf-message">
                    <span>정지훈(1108)</span> 님의 회원가입이 <br />
                    성공적으로 완료되었습니다.
                </p>

                <button className="complete-btn" onClick={loginpg}> 로그인하기 </button>
            </section>
        </div>
    );
}