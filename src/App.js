import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { AlertProvider } from './context/AlertContext';
import { QuizProvider } from './context/QuizContext';
import { ResultsProvider } from './context/ResultsContext';
import AlertPop from './pages/common/components/AlertPop';
import ErrorBoundary from "./pages/common/ErrorBoundary"
import Layout from './pages/common/Layout';
import HomePage from "./pages/home/HomePage"
import QuizPage from './pages/quiz/QuizPage';
import ResultPage from './pages/result/ResultPage';
import ReviewPage from './pages/review/ReviewPage';
import ReviewDetailPage from './pages/review/ReviewDetailPage';

function App() {
  return (
    <ErrorBoundary>
      <AlertProvider>
        <AlertPop />
        <ResultsProvider>
          <QuizProvider>
            <Router>
              <Routes >
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path='/quiz' element={<QuizPage />} />
                  <Route path='/results' element={<ResultPage />} />
                  <Route path='/review' element={<ReviewPage />} />
                  <Route path='/review/detail' element={<ReviewDetailPage />} />
                </Route>
              </Routes>
            </Router>
          </QuizProvider>
        </ResultsProvider>
      </AlertProvider>
    </ErrorBoundary>
  );
}

export default App;
