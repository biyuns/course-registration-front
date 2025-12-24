import IdPswFindTop from "../components/IdPswFindTop";
import Navigation from "../components/Navigate";
import '../css/IdPswFind.css'

export default function IdFind2() {
    const { loginpg, pswfind} = Navigation();
    return (
        <div>
            <IdPswFindTop step={1} />
            <p className="idfind2-coment"> 휴대전화번호 정보와 일치하는 아이디입니다.</p>

            <section className="user-find-inf">
                <p> 아이디 :adbd1234</p>
                <p> 가입일 : 2025. 10. 10</p>
            </section>

            <div className="idfind2-btn-ct">
                <button className="idfind2-login-btn" onClick={loginpg}> 로그인 </button>
                <button className="idfind2-pswfind-btn" onClick={pswfind}>  비밀번호 찾기 </button>
            </div>
        </div>
    )
}
// IdPswFind.css 에 작성함