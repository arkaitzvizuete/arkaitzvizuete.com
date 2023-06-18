import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './app/pages/HomePage';
import { NotFoundPage } from './app/pages/NotFoundPage';
import { TwentyThreePage } from './app/pages/TwentyThreePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/23" element={<TwentyThreePage/>} />
    <Route path='/*' element={<NotFoundPage/>} />
  </Routes>
  <App />
  </BrowserRouter>
);
