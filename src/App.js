import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SubmissionPage from './components/SubmissionPage';
import ReviewPage from './components/ReviewPage';
import FinalJudgementPage from './components/FinalJudgementPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmissionPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/final-judgement" element={<FinalJudgementPage />} />
      </Routes>
    </Router>
  );
}

export default App;
