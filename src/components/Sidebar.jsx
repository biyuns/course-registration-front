import { Outlet, NavLink } from 'react-router-dom';
import '../css/Sidebar.css';

import SideHome from '../img/side-home-img.svg';
import SideSchedule from '../img/side-schedule-img.svg';
import SideManager from '../img/side-manager-img.svg';
import SideUser from '../img/side-user-img.svg';

const Sidebar = () => {
  return (
    <div className="sidebar-ct">
      <aside className='side-ct'>
        <section className='side-content-ct'>

          <NavLink
            to="/home"                             // 홈에 해당하는 라우트
            className={({ isActive }) =>
              `side-home ${isActive ? 'side-active' : ''}`
            }
          >
            <img src={SideHome} alt="사이드 홈 이미지" />
            <p>홈</p>
          </NavLink>

          <NavLink
            to="/schedule"                         // 일정 라우트
            className={({ isActive }) =>
              `side-schedule ${isActive ? 'side-active' : ''}`
            }
          >
            <img src={SideSchedule} alt="사이드 일정 이미지" />
            <p>일정</p>
          </NavLink>

          <NavLink
            to="/ReservationInfo"                          // 관리자 라우트
            className={({ isActive }) =>
              `side-manager ${isActive ? 'side-active' : ''}`
            }
          >
            <img src={SideManager} alt="사이드 관리자 이미지" />
            <p>관리자</p>
          </NavLink>

        </section>

        <div className='side-user'>
          <img src={SideUser} alt="사이드바 유저 이미지" />
        </div>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
