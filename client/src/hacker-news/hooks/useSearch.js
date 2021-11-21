import { useState, useEffect } from "react";
import hackernews from "../apis/hackernews";

const useSearch = (defaultSearchTerm) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        onSearch(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const onSearch = async (link) => {
        const { data } = await hackernews.get(link);

        setData(data);
    };

    return [data, onSearch];
};

export default useSearch;
