
import Backbtn from '../img/backbtn.svg'
import '../css/IdPswFindTop.css'
import Navigation from  '../components/Navigate'

function IdPswFindTop({ step = 1 }) {
    const { idfind, pswfind } = Navigation();
    return (
        <div className='signup-top-style'>
            <div className="mobile-login-top-ct">
                <div>
                    <img src={Backbtn} alt="뒤로가기 버튼"/>
                </div>
                <p className='login-title-font'> 아이디/비밀번호 찾기 </p>
                <div className='idpsw'></div>
            </div>

            <section className='id-psw-find-ct'>
                <p onClick={idfind}> 아이디 찾기</p>
                <p onClick={pswfind}> 비밀번호 재설정</p>
            </section>

            <div className={`Idpsw-mobile-line step-${step}`}> </div>
        </div>
    )
}

export default IdPswFindTop

// css는 Login.css에 작성했음