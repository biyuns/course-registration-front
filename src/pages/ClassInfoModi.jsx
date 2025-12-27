import Header from "../components/Header";
import ManageReserveHeader from "../components/ManageReserveHeader";
import rsvInfo from "../css/RsvInfo.module.css"
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { authAPI } from '../components/apiClient';
import classModi from '../css/ClassModi.module.css'




function ClassInfoModi() {

    const [onModal, setOnModal] = useState(false)

    const [instructor, setInstructor] = useState([]);
    const [subject, setSubject] = useState([]);
    const [classroom, setClassroom] = useState([]);

    const [modiSubject, setModiSubject] = useState("")
    const [modiInstructor, setModiInstructor] = useState("")
    const [modiClassroom, setModiClassroom] = useState("")
    const [modiSeat, setModiSeat] = useState("")



    const handlesubject = async () => {
        const requestData = {
            name: subject,
        };
        try {
            const response = await authAPI.regiSubjects(requestData);

            if (response.status === 200) {
                setOnModal(true);
            }
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

            if (response.status === 200) {
                setOnModal(true);
            }
        } catch (err) {
            console.error("내 정보 수정 실패:", err);
        }
    };

    const handleclassroom = async () => {
        const requestData = {
            name: classroom,
            totalSeat: modiSeat
        };
        try {
            const response = await authAPI.regiClassrooms(requestData);

            if (response.status === 200) {
                setOnModal(true);
            }
        } catch (err) {
            console.error("내 정보 수정 실패:", err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {

            try {
                const [resInstructors, resSubjects, resClassrooms] = await Promise.all([
                    authAPI.instructorsAdd(),
                    authAPI.subjectsAdd(),
                    authAPI.classroomsAdd()
                ]);

                setInstructor(resInstructors.data); // 강사 목록
                setSubject(resSubjects.data);       // 과목 목록
                setClassroom(resClassrooms.data);   // 강의실 목록

            } catch (err) {
                console.error("데이터 로딩 실패:", err);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <Header />
            <ManageReserveHeader />

            <div className={rsvInfo.sub_title}>
                <p>과목명 / 강사 / 강의실 등록</p>
            </div>
            <section className={classModi.form_ct}>
                <div>
                    <label>과목명</label>
                    <div className={classModi.select_input}>
                        <div>
                            <select value={subject} onChange={(e) => setSubject(e.target.value)} >
                                {subject.map((s) => {
                                    <option key={s.id} value={s.id}>{s.name}</option>
                                })}
                            </select>
                            <button onClick={handlesubject}>수정하기</button>
                        </div>
                        <div>
                            <input
                                placeholder="과목명 입력"
                                type="text"
                                value={modiSubject}
                                onChange={(e) => setModiSubject(e.target.value)} />
                            <button onClick={handlesubject}>수정하기</button>
                        </div>

                    </div>

                </div>

                <div>
                    <label>강사</label>
                    <input placeholder="이름 입력"
                        type="text"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)} />
                    <button onClick={handleinstructor}>등록하기</button>
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

export default ClassInfoModi;