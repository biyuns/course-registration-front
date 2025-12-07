import Header from "../components/Header"
import CompleteCircle from '../img/complete-round.svg';
import CompleteCheck from '../img/complete-check.svg' 

import '../css/SignUpComplete.css'
import Navigation from "../components/Navigate";

export default function SignUpComplete() {
    const { loginpg } = Navigation()
    return (
        <div className="media-ct">

            <Header />
            <section className="signup-complete-ct">

                <p className="complete-title"> 시대원학원 회원가입 </p>

                <div className="complete-check-img-ct">
                    <img src={CompleteCircle} />
                    <img className="completecheck-img" src={CompleteCheck} />
                </div>

                <p className="complete-message"> 회원가입 완료</p>

                <p className="complete-inf-message"> <span>정지훈(출결번호)</span> 님의 회원가입이 <br />성공적으로 완료되었습니다.</p>

                <button className="complete-btn" onClick={loginpg}> 로그인 바로하기 </button>
            </section>
        </div>
    )

} 