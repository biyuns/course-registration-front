import Header from "../components/Header";
import rsvInfo from "../css/RsvInfo.module.css"
import UserInfo from "../components/UserInfo";
import search from '../img/search.svg'
import { useState } from "react";
import ManageReserveHeader from "../components/ManageReserveHeader";
import { useEffect } from "react";
import { authAPI } from "../components/apiClient";


function ManageAcessUser() {

    const userAcessInfo = [
        {
            "userId": 2,
            "nickname": "유강맨",
            "email": "kkk@naver.com",
            "attendanceNumber": "9999",
            "parentPhoneNumber": "010-9876-5432",
            "createdDate": "2025-12-22T19:47:26.476708"
        }
    ]

    const [userAcessInfoList, setUserInfo] = useState([])
    const btn = true;

    useEffect(() => {
        const fetchAcessUserInfo = async () => {
            try {
                const response = await authAPI.managerAcessUserList();
                setUserInfo(response.data)
                console.log(UserInfo)
            } catch (err) {
                console.error("유저 조회 실패:", err)
            }
        }

        fetchAcessUserInfo()
    }, [])



    return (
        <>
            <Header />
            <ManageReserveHeader />


            <section>
                <div className={rsvInfo.sub_title}>
                    <p>가입자 정보</p>
                    <div className={rsvInfo.search_div}>
                        <input placeholder="예약자 성함" />
                        <button><img src={search} /></button>
                    </div>
                </div>

                <div className={rsvInfo.reservations_ct}>
                    <div className={rsvInfo.top}>
                        <p className={rsvInfo.info_1_5}>출결번호</p><p className={rsvInfo.info_1_5}>회원이름</p><p className={rsvInfo.info_2}>학부모 전화번호</p><p className={rsvInfo.info_2}>가입일시</p><p className={rsvInfo.info_2}>이메일</p><p className={rsvInfo.info_1}></p>
                    </div>
                    {userAcessInfoList.map((data) => (
                        <UserInfo
                            key={data.userId}
                            userInfo={data}
                            btn={btn}
                        />
                    ))}



                </div>
            </section>



        </>
    )
}

export default ManageAcessUser;