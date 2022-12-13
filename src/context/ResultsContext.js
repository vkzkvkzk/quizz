import React, { useState, createContext } from 'react';
import { LocalStorage } from '../models/locaStorage';

const ResultsContext = createContext();

/**
 * Quiz Result State Context
 * @param {*} children 하위 컴포넌트 
 * @returns 
 */
function ResultsProvider({ children }) {
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
     * @property {string} choose_answer - 선택한 정답
     */

    /**
     * Result
     * @typedef {Object} Result
     * @property {Quiz[]} Quiz
     * @property {number} numCorrect
     * @property {number} numIncorrect
     * @property {string} time
     */

    /**
     * @type {Result[]} Results
     */
    const [results, setResults] = useState(() => {
        const local = localStorage.getItem(LocalStorage.RESULTS)
        return local ? JSON.parse(local) : [];
    });

    const saveResults = (results) => {
        setResults(results);
        localStorage.setItem(LocalStorage.RESULTS, JSON.stringify(results))
    }

    return (
        <ResultsContext.Provider value={{ results, saveResults }}>
            {children}
        </ResultsContext.Provider>
    );
}

export { ResultsProvider, ResultsContext };