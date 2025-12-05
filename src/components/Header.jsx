import AcademyLogo from '../img/academy-logo.svg';
import AcademyLogoDesktop from '../img/academy-logo-desktop.svg'

export default function Header() {
    return (
        <header className='top-header-ct'>
            <picture>
        
                <source className="academy-logo-desktop" media="(min-width: 1281px)" srcSet={AcademyLogoDesktop} />
                <img className="academy-logo" src={AcademyLogo} alt="학원 로고 모바일" />

                <div className='top-bar'> </div>
            </picture>

            <p className='desktop-ct logout'> 로그아웃 </p>
        </header>

    )
}
// css는 SignUp.css에 작성했음