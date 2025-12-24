import { useState } from 'react';
import IdPswFindTop from "../components/IdPswFindTop";
import '../css/IdPswFind.css'
import inputvisible from '../img/inputeye.svg'
import inputremove from '../img/inputx.svg'
import Navigation from '../components/Navigate';

export default function PswRessting() {
    const { pswchangecomplete } = Navigation()

    // 새 비밀번호
    const [newPw, setNewPw] = useState('');
    const [newPwVisible, setNewPwVisible] = useState(false);
    const [newPwFocused, setNewPwFocused] = useState(false);

    // 새 비밀번호 재확인
    const [newPw2, setNewPw2] = useState('');
    const [newPw2Visible, setNewPw2Visible] = useState(false);
    const [newPw2Focused, setNewPw2Focused] = useState(false);

    return (
        <div>
            <IdPswFindTop step={2} />
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

                        {/* 포커스가 있을 때: X 아이콘 (이미지로 비워둠) */}
                        {newPwFocused ? (
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => setNewPw('')}
                            >
                                <img
                                    src={inputremove}
                                    alt="clear password"
                                />
                            </button>
                        ) : (
                            // 포커스가 없을 때: 눈 아이콘 (이미지로 비워둠)
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => setNewPwVisible(v => !v)}
                            >
                                <img
                                    src={inputvisible}
                                    alt="toggle password visibility"
                                />
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

                        {newPw2Focused ? (
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => setNewPw2('')}
                            >
                                <img
                                    src={inputremove}
                                    alt="clear password"
                                />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="pw-icon-btn"
                                onClick={() => setNewPw2Visible(v => !v)}
                            >
                                <img
                                    src={inputvisible}
                                    alt="toggle password visibility"
                                />
                            </button>
                        )}
                    </div>

                    <p> 영문, 숫자를 포함해 8자 이상 입력해 주세요</p>
                </div>
            </form>

            <button className="psw-change-btn" onClick={pswchangecomplete}> 변경하기 </button>
        </div>
    );
}
