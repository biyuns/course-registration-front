import Header from "../components/Header";

import '../css/LocalSignUp.css';

export default function SignUpNormal() {
    return (
        <div className="media-ct">
            <Header />

            <div className="ls-ct">
                {/* local signup = ls로 축약 */}
                <p className="ls-title"> 시대원학원 회원가입 </p>

                <section className="ls-info-ct">
                    <article className="ls-id-ct">
                        <label className="ls-id"> 아이디</label>
                        <input type="text" className="ls-input" placeholder="아이디를 입력" />
                        <p className="ls-id-sub"> 6~12자 영문, 숫자를 입력해주세요. </p>
                    </article>

                    <article className="ls-psw-ct">
                        <label className="ls-psw"> 비밀번호 </label>
                        <input type="text" className="ls-input" placeholder="비밀번호를 입력" />
                        <p className="ls-psw-sub"> 영문, 숫자를 포함해 8자 이상 입력해 주세요.</p>
                    </article>

                    <article className="ls-psw-check-ct">
                        <label className="ls-psw-check"> 비밀번호 재확인</label>
                        <input type="text" className="ls-input" placeholder="비밀번호를 재입력." />
                    </article>

                    <article className="ls-name-ct">
                        <label className="ls-name"> 이름</label>
                        <input type="text" className="ls-input" placeholder="이름." />
                    </article>

                    <article className="ls-email-ct">
                        <label className="ls-email"> 이메일</label>
                        <div className="ls-email2">
                            <input type="text" className="ls-input-email" placeholder="이메일 입력." />
                            <p> @ </p>
                            <select className="ls-input-email">
                                <option> naver.com </option>
                                <option> daum.net </option>
                                <option> gmail.com </option>
                                <option> hanmail.com</option>
                                <option> nate.com </option>
                                <option> 직접입력</option>
                            </select>
                        </div>
                    </article>

                    <article className="ls-number-ct">
                        <label className="ls-number"> 전화번호</label>
                        <input type="text" className="ls-input" placeholder="전화번호 입력." />
                        <p className="ls-number-sub"> '-' 없이 숫자만 입력해 주세요.</p>
                    </article>

                    <article className="ls-attendance-ct">
                        <label className="ls-attendance"> 출결번호</label>
                        <input type="text" className="ls-input" placeholder="출결번호 입력." />
                    </article>
                </section>
                <button className="ls-sign-btn"> 가입하기 </button>
            </div>

        </div>
    )
}