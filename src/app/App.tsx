import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TwentyThreePage } from './pages/TwentyThreePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={ <div>index</div>} />
        <Route path="/23" element={ <TwentyThreePage/> } />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
