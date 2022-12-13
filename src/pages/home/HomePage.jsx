import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext"
import request from '../../utils/service';
import './style/Home.css'
/**
*   HomePage
*/
const HomePage = () => {
    const navigate = useNavigate();

    const { saveQuiz } = useContext(QuizContext);

    /**
     * 퀴즈 api 호출하여 quizContext에 저장
     */
    const loadApi = async () => {
        return await request("/api.php?amount=10")
            .then((data) => {
                /**
                 * 정답 보기 세팅
                 * @param {string} correct_answer 정답
                 * @param {string[]} incorrect_answers 오답리스트
                 * @returns {string[]}
                 */
                const setAllAnswer = (correct_answer, incorrect_answers) => {
                    const all_answers = [...incorrect_answers];
                    all_answers.push(correct_answer);
                    all_answers.sort(() => Math.random() - 0.5);
                    return all_answers;
                }
                data.map(element => {
                    const all_answers = setAllAnswer(element.correct_answer, element.incorrect_answers)
                    element.all_answers = all_answers;
                    return element
                });
                saveQuiz(data)
            })
            .then(() => {
                navigate("/quiz");
            });
    }

    const clickStart = () => {
        loadApi();
    }

    const clickReview = () => {
        navigate("/review")
    }

    return (
        <div>
            <section>
                <div className='title'>
                    Quiz!!
                </div>

            </section>
            <div className='button-group'>
                <Button variant='contained' onClick={clickStart}>
                    시작하기
                </Button>
                <Button variant='contained' onClick={clickReview}>
                    오답노트
                </Button>
            </div>
        </div>
    );
}

export default HomePage;
