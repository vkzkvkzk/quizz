import { Modal, Card, CardContent, Button } from "@mui/material";
import React, { useContext } from "react";
import { AlertContext } from "../../../context/AlertContext";
import '../style/Alert.css'

const AlertPop = ({ children }) => {
    const { alertProps } = useContext(AlertContext);
    const {
        show,
        title,
        contents,
        closeText,
        isConfirm,
        confirmText,
        clickClose,
        clickConfirm } = alertProps
    return (
        <Modal
            open={show}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className="alert-contents">
                <Card sx={{ minHeight: 200, backgroundColor: "steelblue", color: "white" }}>
                    <CardContent>
                        <div className="content">
                            <div className="alert-title">{title}</div>
                            <div className="alert-content">{contents}</div>
                            <div className="alert-button">
                                <Button variant="contained" onClick={clickClose}>
                                    {closeText}
                                </Button>
                                {
                                    isConfirm ? (
                                        <Button onClick={clickConfirm}>
                                            {confirmText}
                                        </Button>
                                    ) : <></>
                                }
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Modal>
    )
}

export default AlertPop;