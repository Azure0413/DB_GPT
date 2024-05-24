import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import Connect from './components/Connect';
import Chatbot from './components/Chatbot';
import ERM from './components/Erm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/erm" element={<ERM />} />
      </Routes>
    </Router>
  );
};

export default App;
