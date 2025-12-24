import AcademyLogo from '../img/academy-logo.svg';
import AcademyLogoDesktop from '../img/academy-logo-desktop.svg'
import MobileProfileImg from '../img/mobile-profile.svg'

export default function Header2() {
    return (
        <div className='top-header-style'>
            <header className='top-header-ct'>
                    <img className="academy-logo-desktop" media="(min-width: 1281px)" src={AcademyLogoDesktop} />
                <p className='desktop-ct logout'> 로그아웃 </p>
                </header>
            <div className="top-line desktop-ct"> </div>
        </div>

    )
}
// css는 Login.css에 작성했음