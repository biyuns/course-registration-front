import rsvRegi from "../css/RsvRegi.module.css";

function ReservationForm() {
    return (
        <form className={rsvRegi.reservation_form}>
            <p className={rsvRegi.class_day}>
                수업일
            </p>
            <div>
                <label className={rsvRegi.labels} htmlFor="className">과목명</label>
                <input id="className" placeholder="과목명 입력" />
            </div>
            <div>
                <label className={rsvRegi.labels} htmlFor="lecturerName">강사</label>
                <input id="lecturerName" placeholder="이름 입력" />
            </div>
            <div>
                <label className={rsvRegi.labels} htmlFor="classNum">강의실</label>
                <input id="classNum" placeholder="강의실 입력" />
            </div>
            <div>
                <p className={rsvRegi.labels}>수업시간</p>
                <select id="startHour">
                    <option>01</option>
                </select>
                <label htmlFor="startHour">시</label>
                <select id="starthMin">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="starthMin">분</label>
                <p>-</p>
                <select id="finishHour">
                    <option>01</option>
                </select>
                <label htmlFor="finishHour">시</label>
                <select id="finishMin">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="finishMin">분</label>
            </div>

            <div className={rsvRegi.gray_line}></div>

            <div>
                <p className={rsvRegi.labels}>예약 기간</p>
                <select id="startYear">
                    <option>01</option>
                </select>
                <label htmlFor="startYear">년</label>
                <select id="startMonth">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="startMonth">월</label>
                <select id="startDay">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="startDay">일</label>
                <p>-</p>
                <select id="startYear">
                    <option>01</option>
                </select>
                <label htmlFor="startYear">년</label>
                <select id="startMonth">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="startMonth">월</label>
                <select id="startDay">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="startDay">일</label>
            </div>
            <div>
                <p className={rsvRegi.labels}>예약시간</p>
                <select id="startHour">
                    <option>01</option>
                </select>
                <label htmlFor="startHour">시</label>
                <select id="starthMin">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="starthMin">분</label>
                <p>-</p>
                <select id="finishHour">
                    <option>01</option>
                </select>
                <label htmlFor="finishHour">시</label>
                <select id="finishMin">
                    <option>00</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label htmlFor="finishMin">분</label>
            </div>

        </form>
    )
}

export default ReservationForm;