import AcademyLogo from '../img/academy-logo.svg';
import AcademyLogoDesktop from '../img/academy-logo-desktop.svg'
import MobileProfileImg from '../img/mobile-profile.svg'

export default function Header() {
    return (
        <div className='top-header-style'>
            <header className='top-header-ct'>
                <picture>

                    <source className="academy-logo-desktop" media="(min-width: 1281px)" srcSet={AcademyLogoDesktop} />
                    <img className="academy-logo" src={AcademyLogo} alt="학원 로고 모바일" />

                    <div className='top-bar'> </div>
                </picture>

                <p className='desktop-ct logout'> 로그아웃 </p>
                <img className="mobile-profile-img" src={MobileProfileImg} alt="모바일에서 보이는 프로필 이미지" />
            </header>
            <div className="top-line desktop-ct"> </div>
        </div>

    )
}
// css는 Login.css에 작성했음