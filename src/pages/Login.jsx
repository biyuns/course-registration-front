import '../css/Login.css';
import GoogleLoginimg from '../img/google-login-logo.svg';
import NaverLoginimg from '../img/naver-login-log.png';
import Header from '../components/Header';

import Navigation from '../components/Navigate.jsx';


export default function Login() {
    const { movesignup } = Navigation();
    return (
        <div className='media-ct'>
            <Header />
            <section className='login-ct'>
                <p> 로그인 </p>
            
                <input type="text" className='id-input' placeholder='아이디' />
                <input type="password" className='password-input' placeholder='비밀번호' />
                <button className="login-btn"> 로그인 </button>

                <div className='find-singup-ct'>
                    <p className='id-find'> 아이디 찾기 </p>
                    <div> | </div>
                    <p className='password-find'> 비밀번호 찾기 </p>
                    <div> | </div>
                    <p className='signup' onClick={movesignup}> 회원가입 </p>
                </div>
                
                <div className='google-naver-login'>
                    <img className="google-login-logo"src={GoogleLoginimg} alt="구글 로그인 로고" />   
                    <img className="naver-login-logo" src={NaverLoginimg} alt="네이버 로그인 로고" />
                </div>
            </section>
        </div>
    )
}