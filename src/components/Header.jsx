import AcademyLogo from '../img/academy-logo.svg';
import AcademyLogoDesktop from '../img/academy-logo-desktop.svg'

export default function Header() {
    return (
        <div>
            <header className='top-header-ct'>
                <picture>

                    <source className="academy-logo-desktop" media="(min-width: 1281px)" srcSet={AcademyLogoDesktop} />
                    <img className="academy-logo" src={AcademyLogo} alt="학원 로고 모바일" />

                    <div className='top-bar'> </div>
                </picture>

                <p className='desktop-ct logout'> 로그아웃 </p>

            </header>
            <div className="top-line desktop-ct"> </div>
        </div>

    )
}
// css는 Login.css에 작성했음