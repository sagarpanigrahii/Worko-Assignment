import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import CandidateHome from './pages/CandidateHome';
import { AuthProvider } from './components/AuthContext';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/candidate/home" element={<CandidateHome />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
