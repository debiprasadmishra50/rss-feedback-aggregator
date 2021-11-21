import React from "react";

const Button = (props) => {
    function handleClick() {
        props.onClick();
    }

    return <button onClick={handleClick}>{props.text}</button>;
};

export default Button;
