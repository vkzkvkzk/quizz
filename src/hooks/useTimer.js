import { useState, useEffect } from "react";

const useTimer = () => {
    // 타이머
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(async () => {
            if (parseInt(seconds) >= 0) {
                await setSeconds(parseInt(seconds) + 1);
            }
            if (parseInt(seconds) === 60) {
                await setMinutes(parseInt(minutes) + 1);
                await setSeconds(0);

            }
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [minutes, seconds]);

    return { minutes, seconds }
}

export default useTimer