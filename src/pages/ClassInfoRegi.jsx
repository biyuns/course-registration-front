import Header from "../components/Header";
import ManageReserveHeader from "../components/ManageReserveHeader";
import rsvInfo from "../css/RsvInfo.module.css"
import classRegi from "../css/ClassRegi.module.css"
import Modal from "../components/Modal";
import { useState } from "react";
import { authAPI } from '../components/apiClient';



function ClassInfoRegi() {

    const [onModal, setOnModal] = useState(false)
    const [subject, setSubject] = useState("")
    const [instructor, setInstructor] = useState("")
    const [classroom, setClassroom] = useState("")
    const [seat, setSeat] = useState("")

    const handlesubject = async () => {
        const requestData = {
            name: subject,
        };
        try {
            const response = await authAPI.regiSubjects(requestData);
            setOnModal(true);

        } catch (err) {
            console.error("강의명 등록 실패:", err);
        }
    };

    const handleinstructor = async () => {
        const requestData = {
            name: instructor,
        };
        try {
            const response = await authAPI.regiInstructors(requestData);
            setOnModal(true);

        } catch (err) {
            console.error("강사명 등록 실패:", err);
        }
    };

    const handleclassroom = async () => {
        const requestData = {
            name: classroom,
            totalSeat: seat
        };
        try {
            const response = await authAPI.regiClassrooms(requestData);
            setOnModal(true);

        } catch (err) {
            console.error("강의실 등록 실패:", err);
        }
    };



    return (
        <>
            <Header />
            <ManageReserveHeader />

            <div className={rsvInfo.sub_title}>
                <p>과목명 / 강사 / 강의실 등록</p>
            </div>
            <section className={classRegi.form_ct}>
                <div>
                    <label>과목명</label>
                    <input
                        required
                        placeholder="과목명 입력"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)} />
                    <button type="button" onClick={() => { handlesubject() }}>등록하기</button>
                </div>
                <div>
                    <label>강사</label>
                    <input
                        required
                        placeholder="이름 입력"
                        type="text"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)} />
                    <button type="button" onClick={() => { handleinstructor() }}>등록하기</button>
                </div>
                <div>
                    <label>강의실</label>
                    <div>
                        <input
                            required
                            placeholder="강의실 입력"
                            type="text"
                            value={classroom}
                            onChange={(e) => setClassroom(e.target.value)} />
                        <p className={classRegi.ho_p}>호</p>
                        <input
                            required
                            placeholder="좌석 수"
                            type="number"
                            value={seat}
                            onChange={(e) => setSeat(e.target.value)} />
                    </div>
                    <button type="button" onClick={() => { handleclassroom() }}>등록하기</button>
                </div>
            </section>
            {
                onModal === true && (
                    <Modal text='등록이 완료되었습니다.' setOnModal={setOnModal} />
                )
            }

        </>
    )
}

export default ClassInfoRegi;