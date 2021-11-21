import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div
            className="time"
            style={{ position: "absolute", top: "0px", right: "10px" }}
        >
            {time}
        </div>
    );
};

export default Clock;
