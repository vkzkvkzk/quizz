import { Modal, Card, CardContent, Button } from "@mui/material";
import React from "react";

const CorrectModal = ({ openModal, checkAnswer, nextQuiz }) => {
    const isCorrect = checkAnswer();
    return (
        <Modal
            open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className="modal-contents">
                <Card sx={{ minWidth: 300, backgroundColor: "lightblue", color: "white" }}>
                    <CardContent>
                        {isCorrect ? (
                            <div className="content">
                                <div className="desc">정답!</div>
                                <div className="button">
                                    <Button variant="contained" onClick={() => nextQuiz(isCorrect)}>
                                        다음 문제
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="content">
                                <div className="desc">오답!</div>
                                <div className="button">
                                    <Button variant="contained" onClick={() => nextQuiz(isCorrect)}>
                                        다음 문제
                                    </Button>
                                </div>
                            </div>
                        )
                        }
                    </CardContent>
                </Card>
            </div>
        </Modal>
    )
}

export default CorrectModal;