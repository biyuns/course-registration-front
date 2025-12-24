import SignupTop from "../components/SignupTop";
import Termremovebtn from '../img/termremove.svg'
import '../css/TermAll.css'
import Navigation from "../components/Navigate";

export default function TermPersonalInf() {
    const { termcondition } = Navigation();
    return (
        <div>
            <SignupTop title='약관동의' />

            <div className="term-all-ct">
                <p className="term-all-remove-img" onClick={termcondition}> <img src={Termremovebtn} alt="x표시 이미지" /></p>

                <p
                    style={{
                        marginBottom: "32px"
                    }}> 개인정보 수집 및 이용</p>
                <section className="term-all-content-ct">
                    <p> 시대원 학원은 회원가입을 위해 아래와 같은 내용으로 개인정보를 수집 및 처리합니다. 
                        <span> <br/> <br/> <br/> 1. 수집하는 개인정보</span>
                        <br/>본인인증정보 이외의 휴대전화번호 또는 이메일주소, 성별, 유선전화번호, 학교명(학생 회원가입인 경우)
                    </p>

                    <p> <span> <br /><br/>2. 개인정보의 처리 및 이용목적</span>
                        <br/>- 이용자 식별 및 회원서비스 제공, 가입의사 확인 및 가입 횟수 제한, 불법 및 부정 이용방지,
                        분쟁조정을 위한 기록보존, 통계자료 산출, 공지사항 전달
                    </p>

                    <p> <span> <br /><br/>3. 개인정보의 처리 및 보유기간</span>
                        <br/>- 회원 탈퇴시 까지
                    </p>

                    <p>
                    <br/>※ 동의를 거부할 권리가 있으며, 동의를 거부하더라도 회원가입은 가능합니다.</p>
                </section>

                <button className="termall-close-btn" onClick={termcondition}> 닫기 </button>
            </div>
        </div>
    )
}