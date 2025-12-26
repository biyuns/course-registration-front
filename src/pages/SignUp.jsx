import Navigation from "../components/Navigate";
import '../css/SignUp.css';
import GoogleLoginimg from '../img/google-login-logo.svg';
import NaverLoginimg from '../img/naver-login-log.png';
import SignupTop from '../components/SignupTop.jsx';
import Logoimg from '../img/login-academy-logo.svg'
import Header from "../components/Header.jsx";
import SignupTermDesktop from "../components/SignupTermDesktop.jsx";

export default function SignUp() {
    const { termcondition } = Navigation();
    return (
        <div className="media-ct">
            <SignupTop title="회원가입" />
            <Header />
            <section className="signup-ct">
                <article className="signup-instructions">
                    <p className="signup-title-ins"> 회원가입 하기 </p>
                    <p className="signup-logo-img"> <img src={Logoimg} /> </p>
                    <p className="signup-sub-ins"> 소셜 로그인 및 이메일로 가입할 수 있습니다.</p>                    
                </article>

                <div className="signup-contour"></div>

                <article className="google-naver-start-ct">
                    <button className="google-start-btn">
                        <img src={GoogleLoginimg} alt="구글 로고" />
                        <p>Google로 시작하기</p>
                        <div></div>
                    </button>

                    <button className="naver-start-btn">
                        <img src={NaverLoginimg} alt="구글 로고" />
                        <p>네이버로 시작하기</p>
                        <div></div>
                    </button>
                </article>

                <article className="signup-contour-ct">
                    <div className="signup-half-contour"></div>
                    <p> 또는 </p>
                    <div className="signup-half-contour2"></div>
                </article>

                <button className="normal-start-btn" onClick={termcondition}> ID/PW 회원가입 </button>
            </section>

        </div>
    )
}