import Navigation from "../components/Navigate";
import SignupTop from "../components/SignupTop";
import '../css/TermConditionAgree.css'

export default function TermConditionAgree() {

    const { termallagree, termpersoninf, termmarketing, signup_normal } = Navigation(); 
    return (
        <div>
            <SignupTop title='약관동의' />

            <section className="agree-list-ct">
                <div className="agree-divide-line"></div>

                <div className="agree-essential-ct">
                    <p> 이용약관 전체 동의 <span className="essential-sub">  (필수) </span></p>
                    <p className="agree-detail" onClick={termallagree}> 보기 </p>
                </div>

                <div className="agree-essential-ct">
                    <p> 개인정보 수집 및 이용 <span className="essential-sub"> (필수) </span></p>
                    <p className="agree-detail" onClick={termpersoninf}> 보기 </p>
                </div>

                <div className="agree-essential-ct">
                    <p> 마케팅 목적의 개인정보 수집 및 이용 <span className="essential-sub"> (필수) </span></p>
                    <p className="agree-detail" onClick={termmarketing}> 보기 </p>
                </div>

                <div className="agree-essential-ct">
                    <p> 광고성 정보 수신 동의 (선택)</p>
                </div>

                <div className="agree-divide-line"></div>
            </section>

            <section className="agree-check-ct">
                <p className="agree-check-comment"> 모두 확인하였으며 동의합니다.</p>
                <div className="agree-check-btn-ct">
                    <p className="agree-check-content"> 이용약관, 개인정보처리 및 이용에 대한 안내(일부 선택),
                        개인정보의 마케팅 및 광고 활용(선택), 전화, 문자, 이메일
                        광고성 정보 수진 동의에 모두 동의합니다.
                    </p>
                    <button> </button>
                </div>
            </section>

            <button className="agree-next-btn" onClick={signup_normal}> 다음 </button>

        </div>
    )
}