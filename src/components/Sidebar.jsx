import { Outlet, NavLink, useLocation } from 'react-router-dom';
import '../css/Sidebar.css';

import SideHome from '../img/side-home-img.svg';
import SideSchedule from '../img/side-schedule-img.svg';
import SideManager from '../img/side-manager-img.svg';
import SideUser from '../img/side-user-img.svg';

const Sidebar = () => {
  const location = useLocation();

  // 예시: 로그인 페이지(/login)와 회원가입(/signup)에서는 관리자 메뉴 숨기기
  const hideManager =
    location.pathname === '/' ||
    location.pathname === '/signup' ||
    location.pathname === '/signup-normal' ||
    location.pathname === '/signupComplete'; 

  // 필요 페이지에 맞게 위 조건만 바꾸면 됨

  return (
    <div className="sidebar-ct">
      <aside className='side-ct'>
        <section className='side-content-ct'>

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `side-home ${isActive ? 'side-active' : ''}`
            }
          >
            <img src={SideHome} alt="사이드 홈 이미지" />
            <p>홈</p>
          </NavLink>

          <NavLink
            to="/time"
            className={({ isActive }) =>
              `side-schedule ${isActive ? 'side-active' : ''}`
            }
          >
            <img src={SideSchedule} alt="사이드 일정 이미지" />
            <p>일정</p>
          </NavLink>

          {/* ✅ 특정 페이지에서 관리자 숨기기 */}
          {!hideManager && (
            <NavLink
              to="/ReservationInfo"
              className={({ isActive }) =>
                `side-manager ${isActive ? 'side-active' : ''}`
              }
            >
              <img src={SideManager} alt="사이드 관리자 이미지" />
              <p>관리자</p>
            </NavLink>
          )}

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
