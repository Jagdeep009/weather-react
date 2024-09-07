import { useState, useEffect } from "react";

export default function RightTop() {
    const [time, setTime] = useState(getCurrentTime);

    function getCurrentTime() {
        const c = new Date();
        const hrs = c.getHours();
        const min = c.getMinutes();
        return {
            hours: hrs,
            minutes: min,
        };
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        // Cleanup interval on component unmount
        // return () => clearInterval(intervalId);
    }, []);

    const greeting = time.hours < 5 ? "Morning" : time.hours < 17 ? "Afternoon" : "Evening";

    return (
        <div className="mb-md-5 text-center col-md-12 col-6">
            <h2 className="mb-4">Good {greeting} :&#41;</h2>
            <h3>{time.hours < 10 ? `0${time.hours}`: time.hours}:{time.minutes < 10 ? `0${time.minutes}`: time.minutes}</h3>
        </div>
    );
}
