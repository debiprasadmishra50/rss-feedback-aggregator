import React from "react";

const Spinner = (props) => {
    return (
        <div className="ui segment" style={{ height: "100vh" }}>
            <div className="ui active dimmer">
                <div className="ui text loader">
                    {props.message || "Loading..."}
                </div>
            </div>
            <p></p>
        </div>
    );
};

// Default Properties in props
Spinner.defaultProps = {
    message: "Loading...",
};

export default Spinner;
