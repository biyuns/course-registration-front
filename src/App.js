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
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
