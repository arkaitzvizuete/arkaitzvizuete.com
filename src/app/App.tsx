import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TwentyThreePage } from './pages/TwentyThreePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { createGlobalStyle } from 'styled-components';
import SquareDotMatrix from "./core/fonts/Square-Dot-Matrix/Square-Dot-Matrix.ttf"
import { CreditsPage } from './pages/CreditsPage';
import { TermsPage } from './pages/TermsPage';
import { FinalPage } from './pages/FinalPage';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SquareDotMatrix';
        src: local('Square Dot Matrix'), local('Square-Dot-Matrix'), url(${SquareDotMatrix}) format('truetype');
    }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/23" element={<TwentyThreePage/>} />
        <Route path="/23/terms" element={<TermsPage/>} />
        <Route path="/23/credits" element={<CreditsPage/>} />
        <Route path='/23/final' element={<FinalPage />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
