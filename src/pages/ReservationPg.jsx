// SeatLayout.jsx
import React from "react";
import Header from "../components/Header";

// 한 줄(ROW)에 대한 메타 정보
const ROW_CONFIG = [
    // 1~3줄: 7좌석
    { id: 1, seatCount: 7 },
    { id: 2, seatCount: 7 },
    { id: 3, seatCount: 7 },

    // 4~5줄: 6좌석 + 왼쪽 문(두 줄 높이) + 5줄 오른쪽 가벽
    { id: 4, seatCount: 6, leftDoor: true, doorGroup: "top" },
    { id: 5, seatCount: 6, leftDoor: true, doorGroup: "bottom", rightWall: true },

    // 6~7줄: 8좌석
    { id: 6, seatCount: 8 },
    { id: 7, seatCount: 8 },

    // 8줄: TV 2개
    { id: 8, seatCount: 0, tvRow: true },

    // 9~13줄: 8좌석
    { id: 9, seatCount: 8 },
    { id: 10, seatCount: 8 },
    { id: 11, seatCount: 8 },
    { id: 12, seatCount: 8 },
    { id: 13, seatCount: 8 },

    // 14줄: 왼쪽 문 + 6좌석 + 오른쪽 가벽
    { id: 14, seatCount: 6, leftDoor: true, singleDoor: true, rightWall: true },

    // 15~17줄: 7좌석
    { id: 15, seatCount: 7 },
    { id: 16, seatCount: 7 },
    { id: 17, seatCount: 7 },
];

const ReservationPg = () => {
    let currentSeatNumber = 1;

    const renderSeats = (count) => {
        return Array.from({ length: count }, (_, i) => {
            const seatNo = currentSeatNumber + i;
            return (
                <button key={seatNo} className="seat">
                    {seatNo}
                </button>
            );
        });
    };

    return (
        <div className="media-ct">
            <Header />
            {/* reservation -> rsr로 축약 */}
            <section className="rsr-ct">

                <div className="rsr-header-ct">
                    <p className="rsr-sound-equipment"> 음향장비</p>
                    <article className="rsr-header-flex">
                        <p className="rsr-board">칠판</p>
                        <p className="rsr-desk">교탁</p>
                    </article>

                </div>

                <div className="rows">
                    {ROW_CONFIG.map((row) => {
                        // 이 줄에서 사용 후 다음 줄 번호 갱신
                        const seats = row.seatCount > 0 ? renderSeats(row.seatCount) : null;
                        if (row.seatCount > 0) {
                            currentSeatNumber += row.seatCount;
                        }

                        return (
                            <div
                                key={row.id}
                                className={`row row-${row.id} ${row.tvRow ? "row-tv" : ""
                                    }`}
                            >
                                {/* 왼쪽 문(두 줄짜리) 또는 한 줄짜리 문 */}
                                {row.leftDoor && (
                                    <div
                                        className={`door-left ${row.singleDoor ? "door-single" : ""
                                            } ${row.doorGroup === "top" ? "door-top" : ""} ${row.doorGroup === "bottom" ? "door-bottom" : ""
                                            }`}
                                    >
                                        문
                                    </div>
                                )}

                                {/* TV만 있는 줄 */}
                                {row.tvRow ? (
                                    <div className="rsr-tv-ct">
                                        <p className="rsr-tv">TV</p>
                                        <p className="rsr-tv">TV</p>
                                    </div>
                                ) : (
                                    <div className="seat-row">{seats}</div>
                                )}

                                {/* 오른쪽 가벽 */}
                                {row.rightWall && <div className="rsr-wall" />}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ReservationPg;
