import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar.jsx'
import './App.css';
import './css/reset.css'
import SignUp from './components/SignUp.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Sidebar />}>
          <Route path="/" element={<SignUp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
