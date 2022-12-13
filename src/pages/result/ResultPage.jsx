import { Button, Card, CardContent } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PieChart from '../common/components/PieChart';
import "./style/Result.css"

/**
*   Result
*/
const ResultPage = () => {
    const location = useLocation();

    const { result } = location.state;

    const data = [
        { label: "정답", value: result.numCorrect },
        { label: "오답", value: result.numIncorrect }
    ];

    return (
        <div>
            <h1>퀴즈 결과입니다!</h1>
            <section>
                <div className='info'>
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
            <div className='chart-wrapper'>
                <PieChart data={data} />
            </div>

            <div className='button'>
                <Link to="/" style={{ textDecorationLine: "none" }}>
                    <Button variant='contained'>
                        시작화면으로 가기
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default ResultPage;
