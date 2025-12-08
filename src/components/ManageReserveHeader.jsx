import { useEffect, useState } from 'react';
import HeadSub from '../css/HeaderSub.module.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigate';


function ManageReserveHeader() {
    const { movereservationInfo, movereservationRegi, movereservationRegiInfo } = Navigation();
    const [reserve, setReserve] = useState(false);

    const clickReserve = () => {
        setReserve(true)
    }

    useEffect(() => {
        setReserve(false)
    }, [])

    return (
        <div className={HeadSub.sub_header_reserve}>
            <div onClick={clickReserve}>예약</div>
            {reserve === true && (
                <section>
                    <div onClick={movereservationInfo}>예약자 정보</div>
                    <div onClick={movereservationRegi}>예약 등록</div>
                    <div onClick={movereservationRegiInfo}>예약등록 정보</div>
                </section>
            )}

        </div>
    )
}

export default ManageReserveHeader;