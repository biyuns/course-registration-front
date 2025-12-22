import Header from "../components/Header"
import changeI from "../css/ChangeInfo.module.css";

function ChangeInfo() {
    return (
        <>
            <Header />
            <section className={changeI.infos}>
                <p>내 정보</p>
                <form className={changeI.infos_form}>
                    <div>
                        <label>회원 아이디</label>
                        <input type="text" placeholder="아이디" value="id"></input>
                    </div>
                    <div>
                        <label>이름</label>
                        <input type="text" value="name"></input>
                    </div>
                    <div>
                        <label>출결번호</label>
                        <input type="number" value="1234"></input>
                    </div>
                    <div>
                        <label>학부모 전화번호</label>
                        <input type="number" value='101'></input>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="password" value='pass'></input>
                    </div>
                </form>



            </section >
            <section className={changeI.button_ct}>
                <button>
                    이전
                </button>
                <button>
                    변경하기
                </button>
            </section>
        </>
    )
}

export default ChangeInfo;