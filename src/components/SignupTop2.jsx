import removebtn from '../img/signupbackbtn.svg'
import '../css/Login.css'
import Navigation from './Navigate'
import Backbtn from '../img/backbtn.svg'
function SignupTop2({ step = 1 }) {
    const { termcondition } = Navigation();
    return (
        <div className='signup-top-style'>
            <div className="mobile-login-top-ct">
                <div>
                    <img src={Backbtn} alt="뒤로가기 버튼"/>
                </div>
                <p className='login-title-font'> 회원가입 </p>
                <img src={removebtn} onClick={termcondition}></img>
            </div>
            <div className={`login-mobile-line step-${step}`}> </div>
        </div>
    )
}

export default SignupTop2

// css는 Login.css에 작성했음