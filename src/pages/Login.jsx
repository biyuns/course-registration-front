import '../css/Login.css';
import GoogleLoginimg from '../img/google-login-logo.svg';
import NaverLoginimg from '../img/naver-login-log.png';
import Navigation from '../components/Navigate.jsx';
import { useState } from 'react';
import { authAPI } from '../components/apiClient.jsx';
import SignupTop from '../components/SignupTop.jsx';
import Logoimg from '../img/login-academy-logo.svg';
import Header from '../components/Header.jsx';

export default function Login() {
  const { movesignup, idfind, pswfind } = Navigation();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 입력 값 상태
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 submit 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await authAPI.login({
        username,
        password,
      }); // POST /login [web:123][web:133]

      const { accessToken, refreshToken } = response.data;

      // 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      setMessage('로그인에 성공했습니다.');
      // 필요하면 여기서 페이지 이동 등 추가
      // 예: window.location.href = '/';
    } catch (error) {
      console.error(error);
      const msg =
        error.response?.data?.message ||
        '아이디 또는 비밀번호를 다시 확인해 주세요.';
      setMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  // 소셜 로그인 (백엔드로 바로 이동)
  const handleGoogleLogin = () => {
    window.location.href = 'https://13.125.89.234.nip.io/oauth2/authorization/google';
  };

  const handleNaverLogin = () => {
    window.location.href = 'https://13.125.89.234.nip.io/oauth2/authorization/naver';
  };

  return (
    <div className="media-ct">
      <SignupTop title="로그인" />
      <Header />
      <section className="login-ct">
        <p className="login-mobile-logoimg">
          <img src={Logoimg} alt="로고" />
        </p>
        <p className="login-desktop-pharse"> 로그인 </p>

        <form className="login-form-ct" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="id-input"
            placeholder="아이디"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="password-input"
            placeholder="비밀번호"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <p className="login-message">{message}</p>}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className="find-singup-ct">
          <p className="id-find" onClick={idfind}>
            아이디 찾기
          </p>
          <div> | </div>
          <p className="password-find" onClick={pswfind}>
            비밀번호 찾기
          </p>
          <div> | </div>
          <p className="signup" onClick={movesignup}>
            회원가입
          </p>
        </div>

        <div className="sns-login-inf">
          <p className="sns-line"></p>
          <p className="sns-title">SNS 계정으로 로그인</p>
          <p className="sns-line"></p>
        </div>

        <div className="google-naver-login">
          <img
            className="google-login-logo"
            src={GoogleLoginimg}
            alt="구글 로그인 로고"
            onClick={handleGoogleLogin}
          />
          <img
            className="naver-login-logo"
            src={NaverLoginimg}
            alt="네이버 로그인 로고"
            onClick={handleNaverLogin}
          />
        </div>
      </section>
    </div>
  );
}
