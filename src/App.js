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
import TermConditionAgree from './pages/Terms_Condition._Agree.jsx';

import MyPage from './pages/MyPage.jsx';
import MyClassInfo from './pages/MyClassInfo.jsx';
import CheckPassword from './pages/CheckPassword.jsx';
import ParentPassword from './pages/ParentPassword.jsx';
import ChangeInfo from './pages/ChangeInfo.jsx';
import TermAllAgree from './pages/TermAllAgree.jsx';
import TermPersonalInf from './pages/TermPersonalInf.jsx';
import TermMarketing from './pages/TermMarketing.jsx';
import PasswordFind from './pages/PasswordFind.jsx';
import IdFind from './pages/IdFind.jsx';
import IdFind2 from './pages/IdFind2.jsx';
import PswRessting from './pages/PswResetting.jsx';
import PswChangeComplete from './pages/PswChangeComplete.jsx';
import ClassInfoRegi from './pages/ClassInfoRegi.jsx';
import ManageAcessUser from './pages/ManageAcessUser.jsx';
import ManageUserInfo from './pages/ManageUserInfo.jsx';
import ManageClassInfo from './pages/ManageClassInfo.jsx';
import ManagerRsvModi from './pages/ManagerRsvModi.jsx';
import ClassInfoModi from './pages/ClassInfoModi.jsx';

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

          <Route path="/termcondition" element={<TermConditionAgree />} />
          <Route path="/idfind" element={<IdFind />} />
          <Route path="/idfind2" element={<IdFind2 />} />
          <Route path="/pswfind" element={<PasswordFind />} />
          <Route path="/pswreseting" element={<PswRessting />} />
          <Route path="/pswchangecomplete" element={<PswChangeComplete />} />
          <Route path="/termallagree" element={<TermAllAgree />} />
          <Route path="/termpersoninf" element={<TermPersonalInf />} />
          <Route path="/termmarketing" element={<TermMarketing />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myClassInfo" element={<MyClassInfo />} />
          <Route path="/password" element={<CheckPassword />} />
          <Route path="/parent-password" element={<ParentPassword />} />
          <Route path='/change-info' element={<ChangeInfo />} />
          <Route path='/class-info-regi' element={<ClassInfoRegi />} />
          <Route path='/manage-user-info' element={<ManageUserInfo />} />
          <Route path='/manage-acess-info' element={<ManageAcessUser />} />
          <Route path='/manage-check-class' element={<ManageClassInfo />} />
          <Route path='/manage-modi-class' element={<ManagerRsvModi />} />
          <Route path='/manage-modi-class-info' element={<ClassInfoModi />} />
        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
