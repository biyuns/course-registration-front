import IdPswFindTop from "../components/IdPswFindTop";
import Navigation from "../components/Navigate";
import '../css/IdPswFind.css'
import { useState } from "react";
import Header from '../components/Header'
import IdPswFindDesktop from "../components/IdPswFindDesktop";

export default function IdFind() {
    const { idfind2 } = Navigation();

    const [form, setForm] = useState({
        nickname: '',
        parentPhoneNumber: '',
        attendanceNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const isFilled =
        form.nickname.trim() !== '' &&
        form.parentPhoneNumber.trim() !== '' &&
        form.attendanceNumber.trim() !== '';

    return (
        <div className="term-all-scroll-ct">
            <IdPswFindTop step={1} />
            <Header />
            <IdPswFindDesktop step={1}/>


            <form className="idfind-info-ct">
                <article className="ls-name-ct">
                    <label className="ls-name"> 이름</label>
                    <input
                        type="text"
                        name="nickname"
                        className="ls-input"
                        placeholder="이름 입력"
                        value={form.nickname}
                        onChange={handleChange}
                    />
                </article>

                <article className="ls-number-ct">
                    <label className="ls-number"> 학부모 전화번호</label>
                    <input
                        type="text"
                        name="parentPhoneNumber"
                        className="ls-input"
                        placeholder="전화번호 입력."
                        value={form.parentPhoneNumber}
                        onChange={handleChange}
                    />
                </article>

                <article className="ls-attendance-ct">
                    <label className="ls-attendance"> 출결번호</label>
                    <input
                        type="text"
                        name="attendanceNumber"
                        className="ls-input"
                        placeholder="출결번호 입력."
                        value={form.attendanceNumber}
                        onChange={handleChange}
                    />
                    <p className="ls-attendance-sub"> 4자리 숫자를 입력해 주세요.</p>
                </article>

                <button
                    className={`idfind-btn ${isFilled ? 'idfind-btn-active' : ''}`}
                    onClick={idfind2}
                    type="submit"
                    disabled={!isFilled}
                > 아이디 찾기</button>
            </form>
        </div>
    )
}
// IdPswFind.css 에 작성함