import '../css/Login.css';
import GoogleLoginimg from '../img/google-login-logo.svg';
import NaverLoginimg from '../img/naver-login-log.png';
import Navigation from '../components/Navigate.jsx';
import { useState } from 'react';
import { authAPI } from '../components/apiClient.jsx';
import SignupTop from '../components/SignupTop.jsx';
import Logoimg from '../img/login-academy-logo.svg' 

export default function Login() {
  const { movesignup, movehome } = Navigation();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // ⭐ 임시 테스트용: API 호출 막고 바로 홈으로 이동
    movehome();
    return;

    /*
    // 실제 로그인 로직 (나중에 다시 사용할 코드)
    try {
      setLoading(true);
      setMessage('');

      const res = await authAPI.login(formData);
      const { accessToken, refreshToken } = res.data;

      console.log('accessToken:', accessToken);
      console.log('refreshToken:', refreshToken);

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      setMessage('로그인 성공!');
      movehome(); // 홈으로 이동
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || '로그인 실패'
      );
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className='media-ct'>
      <SignupTop title="로그인"/>
        <section className='login-ct'>
        <p> <img src={Logoimg} /> </p>

        <form className="login-form-ct" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            className='id-input'
            placeholder='아이디'
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className='password-input'
            placeholder='비밀번호'
            value={formData.password}
            onChange={handleChange}
            required
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

        <div className='find-singup-ct'>
          <p className='id-find'> 아이디 찾기 </p>
          <div> | </div>
          <p className='password-find'> 비밀번호 찾기 </p>
          <div> | </div>
          <p className='signup' onClick={movesignup}> 회원가입 </p>
        </div>

        <div className='sns-login-inf'> 
          <p className='sns-line'></p>
          <p className='sns-title'>SNS 계정으로 로그인</p>
          <p className='sns-line'></p>

        </div>

        <div className='google-naver-login'>
          <img className="google-login-logo" src={GoogleLoginimg} alt="구글 로그인 로고" />
          <img className="naver-login-logo" src={NaverLoginimg} alt="네이버 로그인 로고" />
        </div>
      </section>
    </div>
  );
}
    