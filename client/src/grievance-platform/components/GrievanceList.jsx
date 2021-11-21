import React from "react";

import ApprovalCard from "./ApprovalCard";

const GrievanceList = ({ grievances }) => {
    const renderedList = grievances.map((grievance, index) => {
        return (
            <ApprovalCard key={index}>
                <div>
                    <h3>{grievance.title}</h3>
                    <h4>{grievance.email}</h4>
                    <p>{grievance.desc}</p>
                </div>
            </ApprovalCard>
        );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default GrievanceList;
