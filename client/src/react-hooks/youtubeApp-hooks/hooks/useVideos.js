import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSearch(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const onSearch = async (term) => {
        const res = await youtube.get("/search", {
            params: { q: term },
        });
        const { items } = res.data;

        setVideos(items);
    };

    return [videos, onSearch];
};

export default useVideos;
