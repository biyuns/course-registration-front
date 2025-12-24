import Header from "../components/Header";
import { useState } from "react";
import { authAPI } from "../components/apiClient";
import '../css/LocalSignUp.css';
import Navigation from "../components/Navigate";
import SignuseMobile from "../components/SignuseMobile"
import SignupTop2 from "../components/SignupTop2";
import Header2 from "../components/Header2";

export default function SignUpNormal() {
    const { signupcomplete } = Navigation();
    const isMobile = SignuseMobile();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        nickname: "",
        email: "",
        emailLocal: "",
        emailDomain: "naver.com",
        attendanceNumber: "",
        parentPhoneNumber: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'emailLocal') {
            setFormData(prev => ({
                ...prev,
                emailLocal: value,
                email: value && prev.emailDomain ? `${value}@${prev.emailDomain}` : ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleEmailDomainChange = (e) => {
        const domain = e.target.value;

        setFormData(prev => ({
            ...prev,
            emailDomain: domain,
            email: prev.emailLocal && domain ? `${prev.emailLocal}@${domain}` : prev.email
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setMessage('');

            await authAPI.signup(formData);
            setMessage('회원가입 성공!');
            setFormData({
                username: "",
                password: "",
                nickname: "",
                email: "",
                emailLocal: "",
                emailDomain: "naver.com",
                attendanceNumber: "",
                parentPhoneNumber: ""
            });
            if (isMobile) setStep(1);
            signupcomplete();
        } catch (error) {
            setMessage(error.response?.data?.message || '회원가입 실패');
        } finally {
            setLoading(false);
        }
    };

    const nextStep = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const prevStep = (e) => {
        e.preventDefault();
        setStep(1);
    };

    return (
        <div className="media-ct">
            <Header2 />
            <div className="ls-ct">
                <p className="ls-title"> 시대원학원 회원가입 </p>

                {/* 👇 데스크톱 버전 (전체 필드 한 번에) */}
                {!isMobile && (
                    <form onSubmit={handleSignup} className="ls-info-ct">
                        <article className="ls-id-ct">
                            <label className="ls-id"> 아이디</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="아이디를 입력"
                            />
                            <p className="ls-id-sub"> 6~12자 영문, 숫자를 입력해주세요. </p>
                        </article>

                        <article className="ls-psw-ct">
                            <label className="ls-psw"> 비밀번호 </label>
                            <input
                                type="password"
                                name="password"
                                className="ls-input"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="비밀번호를 입력"
                            />
                            <p className="ls-psw-sub"> 영문, 숫자를 포함해 8자 이상 입력해 주세요.</p>
                        </article>

                        <article className="ls-psw-check-ct">
                            <label className="ls-psw-check"> 비밀번호 확인</label>
                            <input
                                type="password"
                                className="ls-input"
                                placeholder="비밀번호를 재입력."
                            />
                        </article>

                        <article className="ls-name-ct">
                            <label className="ls-name"> 이름</label>
                            <input
                                type="text"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="이름."
                            />
                        </article>

                        <article className="ls-email-ct">
                            <label className="ls-email"> 이메일</label>
                            <div className="ls-email2">
                                <input
                                    type="text"
                                    name="emailLocal"
                                    value={formData.emailLocal}
                                    onChange={handleChange}
                                    className="ls-input-email"
                                    placeholder="이메일 아이디 입력."
                                />
                                <p> @ </p>
                                <select
                                    className="ls-input-email"
                                    value={formData.emailDomain}
                                    onChange={handleEmailDomainChange}
                                >
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="hanmail.com">hanmail.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="direct">직접입력</option>
                                </select>
                            </div>
                        </article>

                        <article className="ls-number-ct">
                            <label className="ls-number"> 학부모 전화번호</label>
                            <input
                                type="text"
                                name="parentPhoneNumber"
                                value={formData.parentPhoneNumber}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="전화번호 입력"
                            />
                            <p className="ls-number-sub"> '-' 없이 숫자만 입력해 주세요.</p>
                        </article>

                        <article className="ls-attendance-ct">
                            <label className="ls-attendance"> 출결번호</label>
                            <input
                                type="text"
                                name="attendanceNumber"
                                value={formData.attendanceNumber}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="출결번호 입력"
                            />
                        </article>

                        <button className="ls-sign-btn" disabled={loading} onClick={signupcomplete}>
                            가입하기
                        </button>
                    </form>
                )}

                {/* 👇 모바일 Step 1 (이름, 이메일, 전화번호, 출결번호) */}
                {isMobile && step === 1 && (
                    <form onSubmit={nextStep} className="ls-info-ct">
                        <SignupTop2 step={1} />
                        <article className="ls-name-ct">
                            <label className="ls-name"> 이름</label>
                            <input
                                type="text"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="이름 입력"
                            />
                        </article>

                        <article className="ls-email-ct">
                            <label className="ls-email"> 이메일</label>
                            <div className="ls-email2">
                                <input
                                    type="text"
                                    name="emailLocal"
                                    value={formData.emailLocal}
                                    onChange={handleChange}
                                    className="ls-input-email"
                                    placeholder="이메일 아이디 입력"
                                />
                                <p> @ </p>
                                <select
                                    className="ls-input-email"
                                    value={formData.emailDomain}
                                    onChange={handleEmailDomainChange}
                                >
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="hanmail.com">hanmail.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="direct">직접입력</option>
                                </select>
                            </div>
                        </article>

                        <article className="ls-number-ct">
                            <label className="ls-number"> 학부모 전화번호</label>
                            <input
                                type="text"
                                name="parentPhoneNumber"
                                value={formData.parentPhoneNumber}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="전화번호 입력."
                            />
                            <p className="ls-number-sub"> '-' 없이 숫자만 입력해 주세요.</p>
                        </article>

                        <article className="ls-attendance-ct">
                            <label className="ls-attendance"> 출결번호</label>
                            <input
                                type="text"
                                name="attendanceNumber"
                                value={formData.attendanceNumber}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="출결번호 입력."
                            />
                            <p className="ls-attendance-sub"> 4자리 숫자를 입력해 주세요.</p>
                        </article>

                        <button className="ls-sign-btn" type="submit">다음</button>
                    </form>
                )}

                {/* 👇 모바일 Step 2 (아이디, 비밀번호, 비밀번호 확인) */}
                {isMobile && step === 2 && (
                    <form onSubmit={handleSignup} className="ls-info-ct">
                        <SignupTop2 step={2} />
                        <article className="ls-id-ct">
                            <label className="ls-id"> 아이디</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="ls-input"
                                placeholder="아이디를 입력"
                            />
                            <p className="ls-id-sub"> 6~12자 영문, 숫자를 입력해주세요. </p>
                        </article>

                        <article className="ls-psw-ct">
                            <label className="ls-psw"> 비밀번호 </label>
                            <input
                                type="password"
                                name="password"
                                className="ls-input"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="비밀번호를 입력"
                            />
                            <p className="ls-psw-sub"> 영문, 숫자를 포함해 8자 이상 입력해 주세요.</p>
                        </article>

                        <article className="ls-psw-check-ct">
                            <label className="ls-psw-check"> 비밀번호 확인</label>
                            <input
                                type="password"
                                className="ls-input"
                                placeholder="비밀번호를 재입력."
                            />
                        </article>

                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                            <button
                                type="button"
                                className="ls-sign-btn"
                                style={{ backgroundColor: '#ccc', flex: 1 }}
                                onClick={prevStep}
                            >
                                이전
                            </button>
                            <button
                                className="ls-sign-btn"
                                disabled={loading}
                                style={{ flex: 1 }}
                                onClick={signupcomplete}
                            >
                                가입하기
                            </button>
                        </div>
                    </form>
                )}

                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}
