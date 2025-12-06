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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Sidebar />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-normal" element={<SignUpNormal />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<ClassApply />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
