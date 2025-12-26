import { useState } from 'react';
import IdPswFindTop from "../components/IdPswFindTop";
import '../css/IdPswFind.css'
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import IdPswFindDesktop from '../components/IdPswFindDesktop';

export default function PasswordFind() {
    const [isComplete, setIsComplete] = useState(false);
    const { pswreseting } = Navigation();

    const [form, setForm] = useState({
        username: '',
        nickname: '',
        emailLocal: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 🔹 세 값이 모두 채워졌는지 여부
    const isFilled =
        form.username.trim() !== '' &&
        form.nickname.trim() !== '' &&
        form.emailLocal.trim() !== '';


    return (
        <div className="term-all-scroll-ct">
            <IdPswFindTop step={2} />
            <Header />
            <IdPswFindDesktop step={2} />

            {!isComplete && (
                <form className="pswfind-info-ct">
                    <article className="ls-id-ct">
                        <label className="ls-id"> 아이디</label>
                        <input
                            type="text"
                            name="username"
                            className="ls-input"
                            placeholder="아이디를 입력"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </article>

                    <article className="ls-name-ct">
                        <label className="ls-name"> 이름</label>
                        <input
                            type="text"
                            name="nickname"
                            className="ls-input"
                            placeholder="이름."
                            value={form.nickname}
                            onChange={handleChange}
                        />
                    </article>

                    <article className="pswfind-email-ct">
                        <label className="ls-email"> 이메일</label>
                        <div className="ls-email2">
                            <input
                                type="text"
                                name="emailLocal"
                                className="pswfind-input-email"
                                placeholder="이메일 아이디 입력."
                                value={form.emailLocal}
                                onChange={handleChange}
                            />
                        </div>
                    </article>
                </form>
            )}

            <button
                className={`pswfind-recheck-btn ${isFilled ? 'pswfind-recheck-btn-active' : ''}`}
                onClick={() => isFilled && setIsComplete(true)}
                style={{ display: isComplete ? 'none' : 'block' }}
                disabled={!isFilled}
            >
                비밀번호 재설정
            </button>

            <section className="pswfind-complete" style={{ display: isComplete ? 'flex' : 'none' }}>
                <p> 인증완료 </p>
                <p> <span>비밀번호를 재설정</span>해주세요. <br />
                    아래 버튼을 클릭하면 재설정 페이지로 연결됩니다.  </p>
            </section>

            <button className="psw-resetting-btn" style={{ display: isComplete ? 'block' : 'none' }}
                onClick={pswreseting}>
                비밀번호 재설정하기
            </button>
        </div>
    )
}
