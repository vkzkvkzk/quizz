import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReviewQuizCard from './components/ReviewQuizCard';
import PieChart from '../common/components/PieChart';
import { Card, CardContent } from '@mui/material';
import "./style/Review.css"

/**
*  Review Detail
*/
const ReviewDeatilPage = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const { result, index } = location.state
    const data = [
        { label: "정답", value: result.numCorrect },
        { label: "오답", value: result.numIncorrect }
    ];

    return (
        <div>
            <h1>{index}번째 퀴즈 오답노트</h1>
            <section>
                <div className='review info'>
                    <Card sx={{ minWidth: 100, backgroundColor: "#1565c0", color: "white", padding: "1rem" }}>
                        <CardContent>
                            <ul>
                                <li>총 {result.quiz.length}문제</li>
                                <li>걸린 시간: {result.time}</li>
                                <li>정답: {result.numCorrect}</li>
                                <li>오답: {result.numIncorrect}</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <section>
                <div className='review quizlist'>
                    <ul>
                        {result.quiz.map((e, i) => {
                            return <ReviewQuizCard result={e} index={i} key={i.toString()} />
                        })}
                    </ul>
                </div>
            </section>
            <section>
                <div className='review chart-wrapper'>
                    <PieChart data={data} />
                </div>
            </section>
            <div className='review button-group'>
                <button onClick={() => { navigate(-1) }}>
                    뒤로 가기
                </button>

                <Link to="/" style={{ textDecorationLine: "none" }}>
                    <button>
                        시작화면으로 가기
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ReviewDeatilPage;
