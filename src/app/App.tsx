import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TwentyThreePage } from './pages/TwentyThreePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/23" element={<TwentyThreePage/>} />
      <Route path='/*' element={<NotFoundPage/>} />
    </Routes>
    <App />
    </BrowserRouter>
  );
}

export default App;
