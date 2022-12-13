import React, { useState, createContext } from 'react';
import { LocalStorage } from '../models/locaStorage';

const QuizContext = createContext();

/**
 * Quiz State Context
 * @param {*} children 하위 컴포넌트 
 * @returns 
 */
function QuizProvider({ children }) {
    /**
     * Quiz
     * @typedef {Object} Quiz
     * @property {string} category - 카테고리
     * @property {string} correct_answer - 정답
     * @property {string} difficulty - 난이도
     * @property {string[]} incorrect_answers - 오답
     * @property {string} question - 문제
     * @property {string} type - 문제 형식
     * @property {string[]} all_answers - 정답, 오답 보기
     */

    /**
     * @type {Quiz[]} quiz
     */
    const [quiz, setQuiz] = useState(() => {
        const localQuiz = localStorage.getItem(LocalStorage.QUIZ)
        return localQuiz ? JSON.parse(localQuiz) : [];
    });

    const saveQuiz = (quiz) => {
        setQuiz(quiz);
        localStorage.setItem(LocalStorage.QUIZ, JSON.stringify(quiz));
    }

    return (
        <QuizContext.Provider value={{ quiz, saveQuiz }}>
            {children}
        </QuizContext.Provider>
    );
}

export { QuizProvider, QuizContext };