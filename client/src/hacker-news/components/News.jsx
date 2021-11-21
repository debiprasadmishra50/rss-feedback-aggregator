import React, { useEffect, useState } from "react";
import hackernews from "../apis/hackernews";

import ActiveNews from "./ActiveNews";
import NewsList from "./NewsList";

const News = ({ link }) => {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [active, setActive] = useState(null);

    useEffect(() => {
        newsSearch(link);
    }, [link]);

    const newsSearch = async (url) => {
        const { data } = await hackernews.get(url);
        setData(data);
    };

    const searchActive = async (id) => {
        const { data } = await hackernews.get(`/item/${id}.json`);
        setActive(data);
    };

    return (
        <div>
            <div className="ui grid container">
                <div
                    className="four wide column ui link list"
                    style={{ textAlign: "center" }}
                >
                    <NewsList
                        data={data}
                        select={activeIndex}
                        onSelect={setActiveIndex}
                        onActive={searchActive}
                    />
                </div>

                <div className="twelve wide column">
                    <ActiveNews active={active} />
                </div>
            </div>
        </div>
    );
};

export default News;
