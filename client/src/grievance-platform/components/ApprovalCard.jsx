import React, { useState } from "react";

const ApprovalCard = (props) => {
    const [status, setStatus] = useState(null);

    const onResolve = () => {
        setStatus(true);
    };

    const onReject = () => {
        setStatus(false);
    };

    const renderedOptions = () => {
        if (status === true) {
            return <p style={{ color: "green" }}>Resolved...</p>;
        } else if (status === false) {
            return <p style={{ color: "red" }}>Rejected...</p>;
        } else {
            return (
                <div className="ui two buttons">
                    <div
                        className="ui basic green button"
                        onClick={onResolve.bind(this)}
                    >
                        Resolve
                    </div>
                    <div
                        className="ui basic red button"
                        onClick={onReject.bind(this)}
                    >
                        Rejected
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="ui card ">
            <div className="content">{props.children}</div>
            <div className="extra content">{renderedOptions()}</div>
        </div>
    );
};

export default ApprovalCard;
