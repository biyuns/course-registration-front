import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './css/reset.css'
import Sidebar from './components/Sidebar.jsx'
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import SignUpNormal from './pages/LocalSignUp.jsx';
import Home from './pages/Home.jsx';
import ClassApply from './pages/ClassApply.jsx';
import TimeCheck from './pages/TimeCheck.jsx';
import SignUpComplete from './pages/SignUpComplete.jsx';
import ReservationPg from './pages/ReservationPg.jsx';
import ManagerRsvRegi from './pages/ManagerRsvRegi.jsx';
import ManagerRsvRegiInfo from './pages/ManageRsvRegiInfo.jsx';
import ManagerRsvInfo from './pages/ManageRsvInfo.jsx';
<<<<<<< Updated upstream
import TermConditionAgree from './pages/Terms_Condition._Agree.jsx';
=======
import MyPage from './pages/MyPage.jsx';
import MyClassInfo from './pages/MyClassInfo.jsx';
import CheckPassword from './pages/CheckPassword.jsx';
import ParentPassword from './pages/ParentPassword.jsx';
import ChangeInfo from './pages/ChangeInfo.jsx';
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Sidebar />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-normal" element={<SignUpNormal />} />
          <Route path="/signupComplete" element={<SignUpComplete />} />
          <Route path="/reservation" element={<ReservationPg />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<ClassApply />} />
          <Route path="/time" element={<TimeCheck />} />
          <Route path="/ReservationRegi" element={<ManagerRsvRegi />} />
          <Route path="/ReservationRegiInfo" element={<ManagerRsvRegiInfo />} />
          <Route path="/ReservationInfo" element={<ManagerRsvInfo />} />
<<<<<<< Updated upstream
          <Route path="/termcondition" element={<TermConditionAgree />} />
=======
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myClassInfo" element={<MyClassInfo />} />
          <Route path="/password" element={<CheckPassword />} />
          <Route path="/parent-password" element={<ParentPassword />} />
          <Route path='/change-info' element={<ChangeInfo />} />
>>>>>>> Stashed changes

        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
