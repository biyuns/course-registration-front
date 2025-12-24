import Backbtn from '../img/backbtn.svg'
import '../css/Login.css'

function SignupTop({ title }) {
    return (
        <div className='signup-top-style'>
            <div className="mobile-login-top-ct">
                <img src={Backbtn}></img>
                <p className='login-title-font'> {title} </p>
                <div></div>
            </div>
            <div className='login-mobile-line'> </div>
        </div>
    )
}

export default SignupTop

// css는 Login.css에 작성했음