import React from "react";

const ReviewCard = ({ result, index }) => {
    const RenderAnswers = ({ answer, i, children }) => {
        if (result.choose_answer === answer
            && result.correct_answer === answer) {
            // 정답 렌더링
            return (
                <div>
                    {children}
                </div>
            )
        }
        if (result.choose_answer === answer
            && result.correct_answer === answer) {
            // 오답 렌더링
            <div>
                {children}
            </div>
        }

        // 그냥 렌더링
        return (
            <div>
                {children}
            </div>
        )
    }

    return (
        <div>
            <span>{index + 1}. {result?.question}</span>
            <ul>
                {result?.all_answers.map((e, i) => {
                    return (
                        <li key={i.toString()}>
                            <RenderAnswers answer={e} index={i}>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={e}
                                    checked={result.choose_answer === i}
                                    disabled={true}>
                                </input>
                                <span>{e}</span>
                            </RenderAnswers>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ReviewCard;