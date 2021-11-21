import React, { useEffect, useState } from "react";

import Form from "./components/Form";
import Table from "./components/Table";
import List from "./components/List";
import Clock from "./components/Clock";

import rss from "./apis/rss";

import axios from "axios";

const App = () => {
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState(null);

    const search = async () => {
        let url = "/api/v1/rss";

        // const { data } = await rss.get(url);
        const { data } = await axios.get(url);
        setResults(data.data);
    };

    useEffect(() => {
        search();
        console.log("First time render");
    }, []);

    const onSubmit = async (data) => {
        // await rss.post("/api/v1/rss", data);
        await axios.post("/api/v1/rss", data);
        search();
    };

    return (
        <div>
            <Clock />
            <div className="ui grid">
                <div className="four wide column">
                    <Form onSubmit={onSubmit} />
                    <Table
                        search={search}
                        results={results}
                        onSelect={setSelected}
                    />
                </div>

                <div className="twelve wide column">
                    <List selected={selected} />
                </div>
            </div>
        </div>
    );
};

export default App;
