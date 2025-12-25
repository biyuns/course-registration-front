import Header from "../components/Header"
import changeI from "../css/ChangeInfo.module.css";
import { useEffect, useState } from "react";
import { authAPI } from '../components/apiClient';
import Modal from "../components/Modal";


function ChangeInfo() {

    const [isModal, setIsModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [checkPass, setCheckPass] = useState(true);
    const [myInfo, setMyInfo] = useState({})
    const [onModal, setOnModal] = useState(false)

    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [phone, setPhone] = useState("");
    const [newPass, setNewPass] = useState("");
    const [cNewPass, setCNewPass] = useState("");

    const clickModi = () => {
        setIsModal(true)
    }

    //내 정보 조회
    useEffect(() => {
        const fetchMyInfo = async () => {
            try {
                const response = await authAPI.getMyInfo();
                setMyInfo(response.data);
            } catch (err) {
                console.error("내 정보 조회 실패:", err);
            }
        }

        fetchMyInfo();
    }, []);

    //비밀번호 확인
    const handleVerifyPassword = async () => {
        if (!currentPassword) {
            return;
        }

        try {
            // API 명세에 맞춰 { password: currentPassword } 형식으로 보냅니다.
            const response = await authAPI.checkPassword({ password: currentPassword });

            if (response.status === 200) {
                setIsModal(false);
                setCheckPass(true);
            }
        } catch (err) {
            console.error("비밀번호 확인 실패:", err);
            if (err.response?.status === 401) {
                alert("비밀번호가 일치하지 않습니다.");
            } else {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            }
        }
    };


    //비밀번호 수정
    const handleChangePassword = async () => {

        const requestData = {
            username: myInfo.username,
        };

        if (newPass) {
            if (newPass !== cNewPass) {
                alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
                return;
            }
            requestData.password = newPass;
            requestData.passwordConfirm = cNewPass;
        }


        try {
            const response = await authAPI.changePassword(requestData);

            if (response.status === 200) {
                setOnModal(true);
            }
        } catch (err) {
            console.error("내 정보 수정 실패:", err);
        }
    };

    //회원정보 수정
    const handleChangeInfo = async () => {

        const requestData = {
            username: myInfo.username,
        };

        if (name) {
            requestData.nickname = name;
        }

        if (num) {
            requestData.attendanceNumber = num;
        }

        if (phone) {
            requestData.parentPhoneNumber = phone;
        }


        try {
            const response = await authAPI.changePassword(requestData);

            if (response.status === 200) {
                setOnModal(true);
            }
        } catch (err) {
            console.error("내 정보 수정 실패:", err);
        }
    };


    return (
        <>
            <Header />
            <section className={changeI.infos}>
                <p>내 정보</p>
                {checkPass ? (
                    <form className={changeI.infos_form_white}>
                        <div>
                            <label>회원 아이디</label>
                            <input type="text" placeholder="아이디" value={myInfo.username}></input>
                        </div>
                        <div>
                            <label>이름</label>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div>
                            <label>출결번호</label>
                            <input type="number"
                                value={num}
                                onChange={(e) => setNum(e.target.value)}></input>
                        </div>
                        <div>
                            <label>학부모 전화번호</label>
                            <input type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div>
                            <label>새 비밀번호</label>
                            <input type="password"
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}></input>
                        </div>
                        <div>
                            <label>새 비밀번호 재확인</label>
                            <input
                                type="password"
                                value={cNewPass}
                                onChange={(e) => setCNewPass(e.target.value)}></input>
                        </div>
                    </form>

                ) : (
                    <form className={changeI.infos_form}>
                        <div>
                            <label>회원 아이디</label>
                            <input type="text" placeholder="아이디" value={myInfo.username}></input>
                        </div>
                        <div>
                            <label>이름</label>
                            <input type="text" value={myInfo.nickname}></input>
                        </div>
                        <div>
                            <label>출결번호</label>
                            <input type="number" value={myInfo.attendanceNumber}></input>
                        </div>
                        <div>
                            <label>학부모 전화번호</label>
                            <input type="number" value={myInfo.parentPhoneNumber}></input>
                        </div>
                        <div>
                            <label>비밀번호</label>
                            <input type="password" value='password'></input>
                        </div>

                    </form>
                )}



            </section >

            {checkPass ? (
                <section className={changeI.button_ct}>
                    <button>
                        이전
                    </button>
                    <button onClick={handleChangeInfo}>
                        변경하기
                    </button>
                </section>
            ) : (

                <section className={changeI.button_ct}>
                    <button>
                        이전
                    </button>
                    <button onClick={clickModi}>
                        회원정보 수정
                    </button>
                </section>
            )}
            {isModal === true && (
                <section className={changeI.modal}>
                    <div>
                        <p>현재 비밀번호를 입력해주세요</p>
                        <input
                            placeholder="비밀번호 입력"
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)} />
                        <button onClick={handleVerifyPassword}>확인</button>
                    </div>
                </section>

            )}
            {
                onModal === true && (
                    <Modal text='변경이 완료되었습니다.' setOnModal={setOnModal} />
                )
            }


        </>
    )
}

export default ChangeInfo;