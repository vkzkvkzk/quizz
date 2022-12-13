import { Card, CardContent, Checkbox } from "@mui/material";
import React from "react";

const QuizCard = ({ quiz, quizNumber, selectedAnswer, setSelectedAnswer }) => {
    return (
        <div className="quizcard">
            <Card sx={{ minWidth: 300, backgroundColor: "#1565c0", color: "white" }}>
                <CardContent>
                    <span
                        className="question"
                        dangerouslySetInnerHTML={{ __html: `${quizNumber + 1}. ${quiz?.question}` }} />
                    <ul>
                        {quiz?.all_answers.map((e, i) => {
                            return (
                                <li key={i.toString()}>
                                    <Checkbox
                                        sx={{ color: "white", '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        color="default"
                                        type="radio"
                                        name="answer"
                                        value={e}
                                        checked={selectedAnswer === i}
                                        onChange={() => setSelectedAnswer(i)}>
                                    </Checkbox>
                                    <span>{e}</span>
                                </li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuizCard;