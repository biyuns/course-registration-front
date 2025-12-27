import AcademyLogo from '../img/academy-logo.svg';
import AcademyLogoDesktop from '../img/academy-logo-desktop.svg'
import MobileProfileImg from '../img/mobile-profile.svg'
import Navigation from './Navigate';

export default function Header() {
    const { loginpg, movesignup } = Navigation();
    
    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('accessToken') !== null;

    // 로그아웃 핸들러
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        // 페이지 새로고침으로 즉시 UI 업데이트
        window.location.reload();
    };

    return (
        <div className='top-header-style'>
            <header className='top-header-ct'>
                <picture>
                    <source className="academy-logo-desktop" media="(min-width: 1024px)" srcSet={AcademyLogoDesktop} />
                    <img className="academy-logo" src={AcademyLogo} alt="학원 로고 모바일" />
                    <div className='top-bar'> </div>
                </picture>

                <div className='login-logout-ct'>
                    {/* 로그인 전: 로그인/회원가입 표시 */}
                    {!isLoggedIn ? (
                        <>
                            <p className='desktop-ct logout' onClick={loginpg}>로그인</p>
                            <p className='desktop-ct logout' onClick={movesignup}>회원가입</p>
                        </>
                    ) : (
                        // 로그인 후: 로그아웃만 표시
                        <p className='desktop-ct logout' onClick={handleLogout}>로그아웃</p>
                    )}
                </div>
                <img className="mobile-profile-img" src={MobileProfileImg} alt="모바일에서 보이는 프로필 이미지" />
            </header>
            <div className="top-line desktop-ct"> </div>
        </div>
    )
}
