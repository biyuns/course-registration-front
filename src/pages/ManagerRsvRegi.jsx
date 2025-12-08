import Header from "../components/Header";
import Calender from "../components/Calender";
import ReservationForm from "../components/ReservationForm";
import rsvRegi from "../css/RsvRegi.module.css";
import ManageHeaderSub from "../components/ManageHeaderSub";
import { useState } from "react";
import ManageReserveHeader from "../components/ManageReserveHeader";

function ManagerRsvRegi() {

    const [step, setStep] = useState(1); 

    // 2. '다음' 버튼 클릭 시 단계를 2로 변경하는 핸들러 함수
    const handleNext = () => {
        setStep(2);
    };

    // 3. '등록하기' 버튼 클릭 시 동작할 핸들러 함수 (필요하다면)
    const handleSubmit = () => {
        console.log('예약 등록 로직 실행');
        // 예약 등록 로직 구현...
    };

    return (
        <>
            <Header />
            <ManageReserveHeader/>
            {step === 1 && (
                <section>
                    <ManageHeaderSub text="날짜선택" button="다음" onButtonClick={handleNext} />
                    <div className={rsvRegi.calender_ct}>
                        <Calender />
                    </div>
                </section>
            )}
            
            {/* step이 2일 때만 두 번째 섹션 렌더링 */}
            {step === 2 && (
                <section>
                    <ManageHeaderSub text="예약등록" button="등록하기" onButtonClick={handleSubmit} />
                    <div className={rsvRegi.class_form}>
                        <ReservationForm />
                    </div>
                </section>
            )}

        </>
    )
}

export default ManagerRsvRegi;