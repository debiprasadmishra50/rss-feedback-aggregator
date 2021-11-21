import React from "react";

const NewsList = ({ data, select, onSelect, onActive }) => {
    const renderList = (data) => {
        const dataList = [];
        for (let i = 0; i < 30; i++) {
            const active = data[i] === select ? "active" : "";

            let temp = (
                <div key={i} style={{ margin: "10px 0px" }}>
                    <a
                        className={`item ${active}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onSelect(data[i]);
                            onActive(data[i]);
                        }}
                    >
                        {data[i]}
                    </a>
                </div>
            );
            dataList.push(temp);
        }

        return <div className="ui celled list">{dataList}</div>;
    };

    return <div>{renderList(data)}</div>;
};

export default NewsList;
