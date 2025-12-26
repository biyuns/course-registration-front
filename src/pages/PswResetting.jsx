import { useState } from 'react';
import IdPswFindTop from "../components/IdPswFindTop";
import '../css/IdPswFind.css'
import inputvisible from '../img/inputeye.svg'
import inputremove from '../img/inputx.svg'
import Navigation from '../components/Navigate';
import Header from '../components/Header';
import IdPswFindDesktop from '../components/IdPswFindDesktop';

export default function PswRessting() {
    const { pswchangecomplete } = Navigation()

    const [newPw, setNewPw] = useState('');
    const [newPwVisible, setNewPwVisible] = useState(false);
    const [newPwFocused, setNewPwFocused] = useState(false);

    const [newPw2, setNewPw2] = useState('');
    const [newPw2Visible, setNewPw2Visible] = useState(false);
    const [newPw2Focused, setNewPw2Focused] = useState(false);

    const isMatch = newPw !== '' && newPw === newPw2;
    const hasInputStarted = newPw !== '' || newPw2 !== '';

    return (
        <div className="term-all-scroll-ct">
            <IdPswFindTop step={2} />
            <Header />
            <IdPswFindDesktop step={2} />
            <p className="psw-resetting-ins"> 비밀번호 재설정</p>

            <form className="new-psw-total-ct">
                {/* 새 비밀번호 */}
                <div className="new-psw-ct">
                    <label> 새 비밀번호</label>

                    <div className="pw-input-wrap">
                        <input
                            type={newPwVisible ? 'text' : 'password'}
                            placeholder="비밀번호 입력"
                            value={newPw}
                            onChange={(e) => setNewPw(e.target.value)}
                            onFocus={() => setNewPwFocused(true)}
                            onBlur={() => setNewPwFocused(false)}
                        />

                        {/* 값이 있을 때만 X 버튼 (inputremove) 표시 */}
                        {newPw !== '' ? (
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => {
                                    setNewPw('');           // 값 완전 삭제
                                    setNewPwVisible(false);  // visible 초기화
                                }}
                            >
                                <img src={inputremove} alt="clear password" />
                            </button>
                        ) : (
                            /* 값 없을 때만 눈 버튼 (inputvisible) 표시 */
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => setNewPwVisible(v => !v)}
                            >
                                <img src={inputvisible} alt="toggle password visibility" />
                            </button>
                        )}
                    </div>

                    <p> 영문, 숫자를 포함해 8자 이상 입력해 주세요</p>
                </div>

                {/* 새 비밀번호 재확인 */}
                <div className="new-psw-recheck-ct">
                    <label> 새 비밀번호 재확인 </label>

                    <div className="pw-input-wrap">
                        <input
                            type={newPw2Visible ? 'text' : 'password'}
                            placeholder="비밀번호 재입력"
                            value={newPw2}
                            onChange={(e) => setNewPw2(e.target.value)}
                            onFocus={() => setNewPw2Focused(true)}
                            onBlur={() => setNewPw2Focused(false)}
                        />

                        {/* 값이 있을 때만 X 버튼 (inputremove) 표시 */}
                        {newPw2 !== '' ? (
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => {
                                    setNewPw2('');           // 값 완전 삭제
                                    setNewPw2Visible(false); // visible 초기화
                                }}
                            >
                                <img src={inputremove} alt="clear password" />
                            </button>
                        ) : (
                            /* 값 없을 때만 눈 버튼 (inputvisible) 표시 */
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => setNewPw2Visible(v => !v)}
                            >
                                <img src={inputvisible} alt="toggle password visibility" />
                            </button>
                        )}
                    </div>

                    <p> 영문, 숫자를 포함해 8자 이상 입력해 주세요</p>
                </div>
            </form>

            {hasInputStarted && !isMatch ? (
                <p className='newpassword-match-pharse'>
                    *정보를 다시 확인하여 주시기 바랍니다.
                </p>
            ) : null}

            <button
                className={`psw-change-btn ${isMatch ? 'psw-change-btn-active' : ''}`}
                onClick={pswchangecomplete}
                disabled={!isMatch}
            >
                변경하기
            </button>

            {hasInputStarted && !isMatch ? (
                <p className='newpassword-match-pharse2'>
                    *정보를 다시 확인하여 주시기 바랍니다.
                </p>
            ) : null}
        </div>
    );
}
