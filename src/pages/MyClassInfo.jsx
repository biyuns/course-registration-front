import myc from '../css/MyClassInfo.module.css';
import profileImg from '../img/profile-img.svg';
import backBtn from '../img/back-btn.svg';
import { useState, useEffect } from 'react';
import { authAPI } from '../components/apiClient';


function MyClassInfo() {

    const [classObj, setClassObj] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const clickModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false);
    }



    useEffect(() => {
        const classString = window.localStorage.getItem('class');
        if (classString) {
            setClassObj(JSON.parse(classString));
        }
    }, []);

    if (!classObj) {
        return <div className={myc.loading}>데이터를 불러오는 중입니다...</div>;
    }

    const {
        reservationId,
        lectureName,
        instructorName,
        classroomName,
        seat,
        start,
        end
    } = classObj;

    const deleteSeat = async () => {
        try {
            const id = reservationId;

            await authAPI.deleteReservation(id);
            setIsDelete(true);
            closeModal();

        } catch (err) {
            console.error("취소 실패:", err);
        }
    };



    return (
        <>
            <header className={myc.mypage_header}>
                <div>
                    <button><img src={backBtn}></img></button>
                    <p>My</p>
                </div>
            </header>
            <section className={myc.profile_section}>
                <div>
                    <img src={profileImg}></img>
                </div>
                <p>이름</p>
            </section>
            <section className={myc.my_class_margin}>
                <div className={myc.my_class_info}>
                    <div className={myc.date_time_ct}>
                        <p>10.30(토)</p>
                        <p>17:25</p>
                        <div className={myc.gray_line}></div>
                        <p className={myc.seat_num}>{seat}번</p>
                    </div>
                    <div className={myc.flex_column}>
                        <div className={myc.gray_ct}>수업명</div>
                        <p>{lectureName}</p>
                    </div>
                    <div className={myc.flex_column}>
                        <div className={myc.gray_ct}>강사</div>
                        <p>{instructorName}</p>
                    </div>
                    {isDelete ? (
                        <div className={myc.my_class_btn}>
                            <button>취소완료</button>
                        </div>
                    ) : (
                        <div className={myc.my_class_btns}>
                            <button>변경하기</button>
                            <button onClick={clickModal}>취소하기</button>
                        </div>

                    )}
                </div>
            </section>
            {isModal === true && (
                <section className={myc.modal}>
                    <div>
                        <p>취소하시겠습니까?<br />취소 신청 후엔 다시 예약해야 합니다.</p>
                        <div>
                            <button onClick={deleteSeat}>취소하기</button>
                            <button onClick={closeModal}>뒤로가기</button>
                        </div>
                    </div>
                </section>

            )}
        </>
    )
}

export default MyClassInfo;