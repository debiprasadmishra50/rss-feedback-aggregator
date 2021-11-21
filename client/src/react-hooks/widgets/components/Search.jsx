import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const time = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(time);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: debouncedTerm,
                    },
                }
            );

            setResults(data.query.search);
        };

        if (debouncedTerm) search();
    }, [debouncedTerm]);

    /* 
        to run Like: lifecycle method
        first arg: callback to be executed, 
        second arg: [] -> When component is rendered for first time only
                    nothing -> When component is rendered for the first time and whenever it re-renders
                    [data] -> (state variables like "term")
                        -> When the component is rendered for the first time and (whenever it re-renders and some piece of data has changed).
        - callback for useEffect can not be async, however, you can create async functions inside it.
    */
    /*
    useEffect(() => {
        // console.log("Initial rendering of component");

        // this function will be executed right before component is re-rendered
        // return () => {
        //     console.log("Cleaning Up");
        // };

        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    },
                }
            );

            setResults(data.query.search);
        };

        // no waiting for first time rendering
        if (term && !results.length) {
            search();
        } else {
            // wait for 500ms to type and then make request and render results
            const time = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            // only thing that can be returned from useEffect is a function (cleanup function)
            // it will be executed just before re-rendering of the component
            return () => {
                clearTimeout(time);
            };
        }
    }, [term, results.length]);
 */

    // Creating the result list
    const renderedResults = results.map((result) => {
        return (
            // prettier-ignore
            <div className="item" key={result.pageid}>
                <div className="right floated content" style={{ position: "relative", top: "0.5em" }}>
                    {/* Go to Wikipedia page: Go Button */}
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GO
                    </a>
                </div>

                <div className="content" style={{ marginBottom: "5px", marginTop: "5px" }} >
                    <div className="header">{result.title}</div>
                    {/* Creating HTML while rendering: making XSS attack */}
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter Search Term: </label>
                    <input
                        type="text"
                        id="search"
                        className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
