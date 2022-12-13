import React from "react";
import { Card, CardContent } from "@mui/material";

const ReviewQuizCard = ({ result, index }) => {
    const RenderAnswers = ({ answer, i, children }) => {
        if (result.correct_answer === answer) {
            // 정답 렌더링
            return (
                <div className="correct">
                    {children}
                </div>
            );
        }
        if (result.choose_answer === answer
            && result.correct_answer !== answer) {
            // 오답 렌더링
            return (<div className="incorrect">
                {children}
            </div>
            );
        }

        // 그냥 렌더링
        return (
            <div>
                {children}
            </div>
        );
    }

    return (
        <div className="quizcard">
            <Card sx={{ minWidth: 300, backgroundColor: "#1565c0", color: "white" }}>
                <CardContent>
                    <span>{index + 1}. {result?.question}</span>
                    <ul>
                        {result?.all_answers.map((e, i) => {
                            return (
                                <li key={i.toString()}>
                                    <RenderAnswers answer={e} index={i}>
                                        <input
                                            type="radio"
                                            name={`answer-${index}`}
                                            value={e}
                                            checked={result.choose_answer === e}
                                            disabled={true}>
                                        </input>
                                        <span>{e}</span>
                                    </RenderAnswers>
                                </li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default ReviewQuizCard;