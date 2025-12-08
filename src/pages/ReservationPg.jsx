import React from "react";
import Header from "../components/Header";

// 좌석 배치도 자동화를 위한 줄 설정
const Row_seat_chart = [
    // 1~3줄: 좌석 7개 
    { id: 1, seatCount: 7 },
    { id: 2, seatCount: 7 },
    { id: 3, seatCount: 7 },

    // 4~5줄: 좌석 6개 + 출입문 2줄 영역 + 5줄 오른쪽 가벽
    { id: 4, seatCount: 6, door2row: true },
    { id: 5, seatCount: 6, Wall: true },

    // 6~7줄: 좌석 8개
    { id: 6, seatCount: 8 },
    { id: 7, seatCount: 8 },

    // 8줄: TV 2개
    { id: 8, seatCount: 0, tv: true },

    // 9~13줄: 좌석 8개
    { id: 9, seatCount: 8 },
    { id: 10, seatCount: 8 },
    { id: 11, seatCount: 8 },
    { id: 12, seatCount: 8 },
    { id: 13, seatCount: 8 },

    // 14줄: 출입문 + 좌석 6개 + 오른쪽 가벽
    { id: 14, seatCount: 6, doorrow: true, Wall: true },

    // 15~17줄: 좌석 7개
    { id: 15, seatCount: 7 },
    { id: 16, seatCount: 7 },
    { id: 17, seatCount: 7 },
];

// 좌석배치도 자동화 코드

const ReservationPg = () => {
    // 현재 좌석번호(줄마다 seatCount 개수만큼 만들어짐 초기값은 1로 설정함)
    let currentSeatNumber = 1;

    // mapSeats => count 만큼 변수 만들어줌
    const mapSeats = (count) => {
        // 위에서 설정한 줄당 좌석 만큼 화면에 표시되도록 설정한 코드
        return Array.from({ length: count }, (_, i) => {

            // 숫자 1씩 더하기
            const seatNo = currentSeatNumber + i;
            return (
                <button
                    // 만들어지는 좌석별 key 값 부여
                    key={seatNo}
                    // 버튼에 css는 rsr-seat로 설정하고 좌석이 부여될 때마다 rsr-seat-{자리번호} 의 클래스가 생성되게 설정
                    className={`rsr-seat rsr-seat-${seatNo}`}
                >

                    {/* 화면에 좌석번호 추가 */}
                    {seatNo}
                </button>
            );
        });
    };

    return (
        <div className="media-ct">
            <Header />

            <div className="reservation-total-ct">
                <div className="reservation-scroll-ct">
                    <p className="lecture-inf"> 강좌 정보 </p>
                    {/* reservation -> rsr로 축약 */}
                    <section className="rsr-ct">

                        {/* 음향장비, 칠판, 교탁 관련 코드들 */}
                        <div className="rsr-header-ct">
                            <p className="rsr-sound-equipment"> 음향장비</p>
                            <article className="rsr-header-flex">
                                <p className="rsr-board">칠판</p>
                                <p className="rsr-desk">교탁</p>
                            </article>

                        </div>


                        <div className="rsr-rows-ct">

                            {/* 위에서 설정한 좌석 배치도 줄 설정 변수를 가져와서 map 함수를 이용해 화면에 출력되게 설정 */}
                            {Row_seat_chart.map((row) => {

                                // 좌석 수가 0보다 크면 즉 1 이상이면 mapSeats 함수 실행(좌석 만들기) 0 이면 seats null값(Tv, 가벽, 출입문 등등)
                                const seats = row.seatCount > 0 ? mapSeats(row.seatCount) : null;

                                // if문 seatCount 추가해서 줄이 바뀌어도 좌석수가 0으로 바뀌는게 아닌 계속 증가되도록 설정
                                if (row.seatCount > 0) {
                                    currentSeatNumber += row.seatCount;
                                }

                                return (
                                    <div
                                        // 각 좌석이 생성되는 줄별로  id 부여
                                        key={row.id}

                                        // rsr-row 클래스 적용, 생성되는 줄마다 rsr-row-id값 클래스 생성,
                                        className={`rsr-row rsr-row-${row.id}`}
                                    >
                                        {/* 출입문 관련 설정 (두 줄 출입문, 한 줄 출입문) */}
                                        {row.door2row && <div className="rsr-door door2row" />}

                                        {/* 14줄: 한 줄짜리 문 */}
                                        {row.doorrow && <div className="rsr-door doorrow" />}

                                        {/* TV 관련 설정 map에서 가져온 Row_seat_chart 함수에서 tv가 있으면 실행되도록 섪정 */}
                                        {row.tv ? (
                                            <div className="rsr-tv-ct">
                                                <p className="rsr-tv">TV</p>
                                                <p className="rsr-tv">TV</p>
                                            </div>
                                        ) : (
                                            // 만약 tv가 감지되는게 아니면 좌석이 화면에 표시되도록 설정
                                            <div className="rsr-seat-ct">{seats}</div>
                                        )}

                                        {/* 오른쪽 가벽 설정 Row_seat_chart 함수에서 Wall 이 감지되면 작성되도록 설정 */}
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

                <div className="rsr-right-ct">
                    <p className="rsr-right-inf"> 예약 정보</p>

                    <section class="lector-inf-ct">
                        <p className="rsr-right-date"> 2025-11-18(토) 06:06</p>
                        <p className="rsr-right-date"> [정규] 변형문제 (오전반) </p>
                    </section>
                    
                    <article className="lector-classroom-ct">
                        <p> 김수정</p>
                        <p className="lector-middle"> | </p>
                        <p> 601호</p>
                    </article>

                    <button className="rsr-reservation-btn"> 예약하기 </button>
                </div>
            </div>
        </div>
    );
};

export default ReservationPg;
