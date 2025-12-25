import Header from "../components/Header";
import rsvInfo from "../css/RsvInfo.module.css"
import UserInfo from "../components/UserInfo";
import ClassCtWeb from "../components/ClassCtWeb";
import ManageHeaderSub from "../components/ManageHeaderSub";
import rsvRegiInfo from "../css/RsvRegiInfo.module.css"
import { useState } from "react";
import ManageReserveHeader from "../components/ManageReserveHeader";



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

    const [userAcessInfoList, setUserInfo] = useState(userAcessInfo)
    const btn = true;


    return (
        <>
            <Header />
            <ManageReserveHeader />


            <section>
                <div className={rsvInfo.sub_title}>
                    <p>가입자 정보</p>
                    <div className={rsvInfo.search_div}>
                        <input placeholder="예약자 성함" />
                        <button></button>
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