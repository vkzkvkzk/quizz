import { Button, Card } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../../context/AlertContext';
import { QuizContext } from "../../context/QuizContext"
import { ResultsContext } from '../../context/ResultsContext';
import { usePrompt } from '../../hooks/useBlocker';
import useTimer from '../../hooks/useTimer';
import CorrectModal from './components/CorrectModal';
import QuizCard from './components/QuizCard';
import './style/Quiz.css'

/**
*   QuizPage
*/
const QuizPage = () => {
    const navigate = useNavigate();
    const { quiz, saveQuiz } = useContext(QuizContext);
    const { results, saveResults } = useContext(ResultsContext)
    const { alertProps, setAlertProps } = useContext(AlertContext);

    // 페이지 이탈 시 경고
    usePrompt('현재 페이지를 벗어나시겠습니까?', true);

    // 타이머
    const { minutes, seconds } = useTimer();

    // 현재 문제 번호
    const [quizNumber, setQuizNumber] = useState(0)

    // 모달
    const [openModal, setOpenModal] = useState(false);

    // 선택한 답
    const [selectedAnswer, setSelectedAnswer] = useState(0);

    // 결과
    const [result, setResult] = useState({
        quiz: [],
        numCorrect: 0,
        numIncorrect: 0,
        time: ""
    })

    /**
     * 다음 문제로 넘어가는 함수
     * @param {boolean} 정답 유무
     * @returns 
     */
    const nextQuiz = (isCorrect) => {
        setOpenModal(false);
        setSelectedAnswer(0)
        let newResult;
        let newQuiz = {
            ...quiz[quizNumber],
            choose_answer: quiz[quizNumber].all_answers[selectedAnswer]
        }
        if (isCorrect) {
            newResult = {
                ...result,
                quiz: [
                    ...result.quiz,
                    newQuiz
                ],
                numCorrect: result.numCorrect + 1,
            };
        } else {
            newResult = {
                ...result,
                quiz: [
                    ...result.quiz,
                    newQuiz,
                ],
                numIncorrect: result.numIncorrect + 1,
            };
        }

        if (quizNumber >= quiz.length - 1) {
            moveResult(newResult);
        } else {
            setResult(newResult);
            setQuizNumber(quizNumber + 1);
        }
    }

    /**
     * 결과 화면 이동
     * @param {Result} result 
     */
    const moveResult = (result) => {
        result = {
            ...result,
            time: `${minutes}분 ${seconds}초`
        }
        setAlertProps({
            ...alertProps,
            show: true,
            title: "모든 문제를 다 푸셨습니다! 🎉",
            contents: "푸신 문제의 결과를 확인해보실 수 있습니다!",
            closeText: "결과 보기",
            clickClose: () => {
                setAlertProps({
                    show: false
                })
                saveResults([
                    ...results,
                    result
                ])
                saveQuiz([])
                navigate('/results', {
                    replace: true,
                    state: {
                        result: result
                    },
                })
            }
        })
    }

    /**
     * 제출한 답 정답 확인
     * @returns {boolean}
     */
    const checkAnswer = () => {
        const { all_answers, correct_answer } = quiz[quizNumber];
        if (all_answers[selectedAnswer] === correct_answer) {
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {number} m: 분
     * @param {number} s: 초
     * @returns {JSX} 타이머 컴포넌트
     */
    const Timer = ({ m, s }) => {
        return (
            <div className='timer'>
                <Card sx={{ minWidth: 100, backgroundColor: "#1565c0", color: "white", padding: "1rem" }}>{m}분 {s}초</Card>
            </div>
        )
    }

    return (
        <>
            <div className='quizpage' data-testid="quizpage">
                <Timer m={minutes} s={seconds} />
                <QuizCard
                    quiz={quiz[quizNumber]}
                    quizNumber={quizNumber}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer} />
                <Button variant='contained' onClick={() => setOpenModal(true)}>제출</Button>
            </div>
            <CorrectModal openModal={openModal} checkAnswer={checkAnswer} nextQuiz={nextQuiz} />
        </>
    );
}

export default QuizPage;
