import { useEffect, useState } from 'react';
import HeadSub from '../css/HeaderSub.module.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigate';


function ManageReserveHeader() {
    const { movemanageclassdetailregi, movereservationRegiInfo, movemanageuserinfo, movemanageacessinfo } = Navigation();
    const [reserve, setReserve] = useState(false);

    const clickReserve = () => {
        setReserve(true)
    }

    useEffect(() => {
        setReserve(false)
    }, [])

    return (
        <div className={HeadSub.sub_header_reserve}>
            <div onClick={movereservationRegiInfo}>예약</div>
            <div onClick={movemanageclassdetailregi}>과목명/강사/강의실 등록</div>
            <div onClick={clickReserve}>회원 관리</div>
            {reserve === true && (
                <section>
                    <div onClick={movemanageuserinfo}>회원 정보</div>
                    <div onClick={movemanageacessinfo}>가입자 정보</div>
                </section>
            )}

        </div>
    )
}

export default ManageReserveHeader;