import React from "react";
import axios from "axios";

import rss from "../apis/rss";

const Table = ({ search, results, onSelect }) => {
    const deleteItem = async (slug) => {
        // await rss.delete(`/rss/${slug}`);
        await axios.delete(`/api/v1/rss/${slug}`);

        search();
    };

    const displayResults = (results) => {
        const renderedList = results.map((result, i) => {
            return (
                <div
                    key={i + 1}
                    className="ui segment"
                    style={{
                        padding: "7px 7px 10px 7px",
                        fontSize: "1.5em",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    <span onClick={onSelect.bind(this, result)}>
                        {result.name}
                    </span>

                    <button
                        className="ui icon mini button right floated negative"
                        onClick={deleteItem.bind(this, result.slug)}
                    >
                        <i className="trash alternate icon"></i>
                    </button>
                </div>
            );
        });

        return <React.Fragment>{renderedList}</React.Fragment>;
    };

    return (
        <div className="ui segments">
            {results.length > 0 ? (
                displayResults(results)
            ) : (
                <div className="ui active centered inline loader"></div>
            )}
        </div>
    );
};

export default Table;
