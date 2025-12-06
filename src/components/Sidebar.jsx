import { Outlet, NavLink } from 'react-router-dom'
import '../css/Sidebar.css'

import SideHome from '../img/side-home-img.svg';
import SideSchedule from '../img/side-schedule-img.svg'
import SideManager from '../img/side-manager-img.svg'
import SideUser from '../img/side-user-img.svg'
import Header from './Header';

const Sidebar = () => {
    return (
        <div className="sidebar-ct">
            
            <aside className='side-ct'>
                
                <section className='side-content-ct'>

                    <div className='side-home'> 
                        <img src={SideHome} alt="사이드 홈 이미지"/>
                        <p> 홈</p>
                    </div>

                    <div className='side-schedule'>
                        <img src={SideSchedule} alt="사이드 일정 이미지"/>
                        <p> 일정 </p>
                    </div>

                    <div className='side-manager'>
                        <img src={SideManager} alt="사이드 관리자 이미지"/>
                        <p> 관리자</p>
                    </div>

                </section>

                <div className='side-user'>
                    <img src={SideUser} alt="사이드 유저 이미지"/>
                </div>

            </aside>

        <main>
            <Outlet />            
        </main>

        </div>
    )
}

export default Sidebar;