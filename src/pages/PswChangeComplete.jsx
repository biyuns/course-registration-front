import IdPswFindTop from "../components/IdPswFindTop";
import CompleteCircle from '../img/complete-round.svg';
import CompleteCheck from '../img/complete-check.svg'
import Navigation from "../components/Navigate";
import Header from "../components/Header";
import IdPswFindDesktop from "../components/IdPswFindDesktop";

export default function PswChangeComplete() {
    const { loginpg } = Navigation()
    return (
        <div className="term-all-scroll-ct">
            <IdPswFindTop />
            <Header />
            <IdPswFindDesktop step={2} />
            <section className="signup-complete-ct">

                <div className="pswchange-complete-check-img-ct">
                    <img src={CompleteCircle} alt="" />
                    <img className="pswchange-completecheck-img" src={CompleteCheck} alt="체크표시" />
                </div>

                <p className="complete-message"> 비밀번호 변경 완료</p>

                <p className="complete-inf-message">
                    <span>정지훈(1108)</span> 님의 회원가입이 <br />
                    성공적으로 완료되었습니다.
                </p>

                <button className="pswchange-complete-btn" onClick={loginpg}> 로그인하러 가기 </button>
            </section>
        </div>
    );
}
