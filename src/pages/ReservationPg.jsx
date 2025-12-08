import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

// 좌석 배치 설정
const Row_seat_chart = [
  { id: 1, seatCount: 7 },
  { id: 2, seatCount: 7 },
  { id: 3, seatCount: 7 },
  { id: 4, seatCount: 6, door2row: true },
  { id: 5, seatCount: 6, Wall: true },
  { id: 6, seatCount: 8 },
  { id: 7, seatCount: 8 },
  { id: 8, seatCount: 0, tv: true },
  { id: 9, seatCount: 8 },
  { id: 10, seatCount: 8 },
  { id: 11, seatCount: 8 },
  { id: 12, seatCount: 8 },
  { id: 13, seatCount: 8 },
  { id: 14, seatCount: 6, doorrow: true, Wall: true },
  { id: 15, seatCount: 7 },
  { id: 16, seatCount: 7 },
  { id: 17, seatCount: 7 },
];

// 이미 예매 완료된 좌석 번호들
const reservedSeats = [56, 66, 71, 83, 88, 30, 5, 7];

const ReservationPg = () => {
  // 선택된 좌석 번호 (하나만 선택 가능)
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  // 현재 좌석 번호
  let currentSeatNumber = 1;

  const handleSeatClick = (seatNo) => {
    // 이미 예매 완료 좌석은 클릭해도 무시
    if (reservedSeats.includes(seatNo)) return;

    // 같은 좌석 다시 클릭하면 선택 해제, 아니면 그 좌석으로 변경
    setSelectedSeat((prev) => (prev === seatNo ? null : seatNo));
  };

  const mapSeats = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const seatNo = currentSeatNumber + i;

      const isReserved = reservedSeats.includes(seatNo);
      const isSelected = selectedSeat === seatNo;

      let className = `rsr-seat rsr-seat-${seatNo}`;

      if (isReserved) {
        className += " rsr-seat-reserved";
      } else if (isSelected) {
        className += " rsr-seat-selected";
      }

      return (
        <button
          key={seatNo}
          className={className}
          type="button"
          onClick={() => handleSeatClick(seatNo)}
        >
          {seatNo}
        </button>
      );
    });
  };

  // 예약하기 버튼 클릭 시 Home으로 정보 전달
  const handleReserve = () => {
    if (!selectedSeat) return; // 좌석 안 고르면 아무것도 안 함

    // 오른쪽 패널에 써둔 예약 정보 (지금은 하드코딩, 나중에 API 연동 가능)
    const dateText = "2025-12-1 18:00"; // 날짜+시간
    const title = "[정규반] 국어";
    const teacher = "정지훈";
    const classroom = "601호";
    const seatNumber = selectedSeat;

    navigate("/home", {
      state: { dateText, title, teacher, classroom, seatNumber },
    });
  };

  return (
    <div className="media-ct">
      <Header />

      <div className="reservation-total-ct">
        <div className="reservation-scroll-ct">
          <p className="lecture-inf"> 강좌 정보 </p>

          <section className="rsr-ct">
            {/* 상단(음향, 칠판, 교탁) */}
            <div className="rsr-header-ct">
              <p className="rsr-sound-equipment"> 음향장비</p>
              <article className="rsr-header-flex">
                <p className="rsr-board">칠판</p>
                <p className="rsr-desk">교탁</p>
              </article>
            </div>

            <div className="rsr-rows-ct">
              {Row_seat_chart.map((row) => {
                const seats = row.seatCount > 0 ? mapSeats(row.seatCount) : null;

                if (row.seatCount > 0) {
                  currentSeatNumber += row.seatCount;
                }

                return (
                  <div
                    key={row.id}
                    className={`rsr-row rsr-row-${row.id}`}
                  >
                    {row.door2row && <div className="rsr-door door2row" />}
                    {row.doorrow && <div className="rsr-door doorrow" />}

                    {row.tv ? (
                      <div className="rsr-tv-ct">
                        <p className="rsr-tv">TV</p>
                        <p className="rsr-tv">TV</p>
                      </div>
                    ) : (
                      <div className="rsr-seat-ct">{seats}</div>
                    )}

                    {row.Wall && <div className="rsr-wall" />}
                  </div>
                );
              })}

              <section className="pick-seat-ct">
                <div className="pick-possible">
                  <p className="seat-color-pp"></p>
                  <p> 예매 가능 좌석 </p>
                </div>

                <div className="pick-already-complete">
                  <p className="seat-color-ac"></p>
                  <p> 예매 완료 좌석 </p>
                </div>
              </section>
            </div>
          </section>
        </div>

        {/* 오른쪽 예약 정보 영역 */}
        <div className="rsr-right-ct">
          <p className="rsr-right-inf"> 예약 정보</p>

          <section className="lector-inf-ct">
            <p className="rsr-right-date"> 2025-12-1 18:00</p>
            <p className="rsr-right-date"> [정규반] 국어 </p>
          </section>

          <article className="lector-classroom-ct">
            <p> 정지훈</p>
            <p className="lector-middle"> | </p>
            <p> 601호</p>
          </article>

          <button
            className={`rsr-reservation-btn ${
              selectedSeat ? "rsr-reservation-btn-active" : ""
            }`}
            type="button"
            onClick={handleReserve}
          >
            예약하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPg;
