import React, { useState, createContext } from 'react';

const initialState = {
    show: false,
    title: "",
    contents: "",
    closeText: "취소",
    isConfirm: false,
    confirmText: "확인",
    clickClose: () => { },
    clickConfirm: () => { },
}

const AlertContext = createContext();

/**
 * Alert State Context
 * @param {*} children 하위 컴포넌트 
 * @returns 
 */
function AlertProvider({ children }) {
    const [alertProps, setAlertProps] = useState(initialState);

    return (
        <AlertContext.Provider value={{ alertProps, setAlertProps }}>
            {children}
        </AlertContext.Provider>
    );
}

export { AlertProvider, AlertContext };