import SignupTop from "../components/SignupTop";
import Termremovebtn from '../img/termremove.svg'
import '../css/TermAll.css'
import Navigation from "../components/Navigate";
import Header from "../components/Header";

export default function TermMarketing() {
    const { termcondition } = Navigation();
    return (
        <div className="term-all-scroll-ct">
            <SignupTop title='약관동의' />
            <Header />

            <p className="term-all-pharse"> 시대원 학원 회원가입</p>

            <div className="term-all-ct">
                <p className="term-all-remove-img" onClick={termcondition}> <img src={Termremovebtn} alt="x표시 이미지" /></p>

                <p
                    style={{
                        marginBottom: "32px"
                    }}> 마케팅 목적의 개인정보 수집 및 이용</p>
                <section className="term-all-content-ct">
                    <p> 시대원 학원 및 그룹사 서비스의 이벤트·혜택 등의 정보 발송(문자 또는 이메일)을 위해 아이디, 이름
                        , 휴대전화번호 또는 이메일주소를 처리합니다.
                    </p>

                    <p> <br /> <br /> 회원탈퇴를 하거나, 추후 광고성 정보 수신을 거부하는 경우 본 먹적의 개인정보 처리도
                        중지됩니다.
                    </p>

                    <p>
                        <br />※ 정보주체는 개인정보 수집 및 이용 동의를 거부하실 수 있으나, 미동의 시 시대원 학원 및 그룹사 서비스의
                        이벤트·혜택 정보들을 받으실 수 없습니다.
                    </p>
                </section>

                <button className="termall-close-btn" onClick={termcondition}> 닫기 </button>
            </div>
        </div>


    )
}