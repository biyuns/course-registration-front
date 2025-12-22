import backBtn from '../img/back-btn.svg';
import changeF from '../css/ChangeForm.module.css';

function ParentPassword() {
    return (
        <>
            <header className={changeF.mypage_header}>
                <div>
                    <button><img src={backBtn}></img></button>
                    <p>학부모 전화번호 변경</p>
                </div>
            </header>
            <section className={changeF.form_section}>
                <label>현재 비밀번호</label>
                <input type='password' placeholder='현재 비밀번호 입력' />
                <p>‘-’ 없이 숫자만 입력해 주세요</p>

                <button>변경하기</button>
                <p className={changeF.red}>정보를 다시 확인하여 주시기 바랍니다.</p>
            </section>
        </>
    )
}

export default ParentPassword;