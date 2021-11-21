import React from "react";

const ActiveNews = ({ active }) => {
    if (!active) return "";

    return (
        <div>
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <a className="header" href={active.url}>
                            {active.title}
                        </a>
                        <div className="description">
                            <h4>By: {active.by}</h4>
                            <div className="meta">
                                <span>score: {active.score}</span>
                                <span>type: {active.type}</span>
                            </div>
                        </div>
                        <a href={active.url} target="_blank" rel="noreferrer">
                            [visit link]
                        </a>
                    </div>
                </div>
            </div>
            <iframe
                src={active.url}
                frameBorder="1"
                title={active.title}
                style={{ height: "100vh", width: "100%" }}
            ></iframe>
        </div>
    );
};

export default ActiveNews;
