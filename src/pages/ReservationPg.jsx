import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/ReservationPg.css'
import MobileProfileimg from '../img/mobile-profile.svg'
import MobileBackbtn from '../img/backbtn.svg'
import reservationLogo from '../img/reservation-logo-img.svg'
import { authAPI } from "../components/apiClient"

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

const ReservationPg = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lectureData, setLectureData] = useState(null);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // lectureId 가져오기 (URL 파라미터나 이전 페이지에서 전달된 값)
  const lectureId = location.state?.lectureId || 6; // 기본값 6

  // 페이지 로드시 강의실 정보 및 좌석 상태 조회
  useEffect(() => {
    const fetchLectureInfo = async () => {
      try {
        setInitialLoading(true);
        const response = await authAPI.getLectureInfo(lectureId); // API 메서드명은 실제 구현에 맞게 수정
        setLectureData(response.data);
        
        // RESERVED, BLOCKED 상태인 좌석 번호들 추출 (숫자만)
        const reserved = response.data.seats
          .filter(seat => seat.status === 'RESERVED' || seat.status === 'BLOCKED')
          .map(seat => parseInt(seat.seatNumber.replace('601호-', '')));
        setReservedSeats(reserved);
      } catch (error) {
        console.error('강의 정보 조회 실패:', error);
        alert('강의 정보를 불러오는데 실패했습니다.');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchLectureInfo();
  }, [lectureId]);

  let currentSeatNumber = 1;

  const handleSeatClick = (seatNo) => {
    if (reservedSeats.includes(seatNo) || loading) return;
    setSelectedSeat((prev) => (prev === seatNo ? null : seatNo));
  };

  const mapSeats = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const seatNo = currentSeatNumber + i;
      const isReserved = reservedSeats.includes(seatNo);
      const isSelected = selectedSeat === seatNo;

      let className = `rsr-seat rsr-seat-${seatNo}`;
      if (isReserved) className += " rsr-seat-reserved";
      else if (isSelected) className += " rsr-seat-selected";

      return (
        <button
          key={seatNo}
          className={className}
          type="button"
          disabled={isReserved || loading || initialLoading}
          onClick={() => handleSeatClick(seatNo)}
        >
          {seatNo}
        </button>
      );
    });
  };

  // 예약하기 버튼 클릭 시
  const handleReserve = async () => {
    if (!selectedSeat || loading || initialLoading) return;

    try {
      setLoading(true);

      const payload = {
        lectureId: lectureId,
        seatNumber: `601호-${selectedSeat}`,
      };

      await authAPI.reserveSeat(payload);

      // 예약 성공 후 홈으로 이동
      navigate("/home", {
        state: { 
          dateText: lectureData?.startTime || "2025-12-1 18:00",
          title: lectureData?.lectureName || "[정규반] 국어",
          teacher: lectureData?.instructorName || "정지훈",
          classroom: lectureData?.classroomName || "601호",
          seatNumber: selectedSeat
        },
      });
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        "좌석 예약 중 오류가 발생했습니다. 다시 시도해 주세요."
      );
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="media-ct">
        <Header />
        <div className="loading-ct">좌석 상태를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="media-ct">
      <Header />
      <nav className="reservation-top-ct">
        <img src={MobileBackbtn} alt="모바일 뒤로가기 이미지" />
        <img src={reservationLogo} alt="중앙로고 이미지" />
        <img src={MobileProfileimg} alt="모바일 마이페이지 이미지" />
      </nav>

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

              <div className="seat-mobile-ct">
                <section className="pick-seat-ct">
                  <div className="pick-possible">
                    <p className="seat-color-pp"></p>
                    <p> 예매 가능 자리 </p>
                  </div>

                  <div className="pick-already-complete">
                    <p className="seat-color-ac"></p>
                    <p> 예매 완료 자리 </p>
                  </div>

                  <div className="pick-already-complete">
                    <p className="seat-color-ac2"></p>
                    <p> 내 자리 선택 </p>
                  </div>
                </section>
              </div>
            </div>

            <button
              className={`rsr-reservation-btn ${selectedSeat && !loading ? "rsr-reservation-btn-active" : ""}`}
              type="button"
              disabled={!selectedSeat || loading || initialLoading}
              onClick={handleReserve}
            >
              {loading ? '예약 중...' : '예약하기'}
            </button>
          </section>
        </div>

        {/* 오른쪽 예약 정보 영역 - API 데이터로 동적 표시 */}
        <div className="rsr-right-ct">
          <p className="rsr-right-inf"> 예약 정보</p>

          <section className="lector-inf-ct">
            <p className="rsr-right-date">
              {lectureData?.startTime ? 
                new Date(lectureData.startTime).toLocaleString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                }) : '로딩 중...'}
            </p>
            <p className="rsr-right-date">{lectureData?.lectureName || '로딩 중...'}</p>
          </section>

          <article className="lector-classroom-ct">
            <p>{lectureData?.instructorName || '로딩 중...'}</p>
            <p className="lector-middle"> | </p>
            <p>{lectureData?.classroomName || '로딩 중...'}</p>
          </article>

          <button
            className={`rsr-reservation-btn ${selectedSeat && !loading ? "rsr-reservation-btn-active" : ""}`}
            type="button"
            disabled={!selectedSeat || loading || initialLoading}
            onClick={handleReserve}
          >
            {loading ? '예약 중...' : '예약하기'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPg;
