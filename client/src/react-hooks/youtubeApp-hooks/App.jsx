import React, { useState, useEffect } from "react";

// import youtube from "./api/youtube";

import Clock from "./components/Clock";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import useVideos from "./hooks/useVideos";

const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos(
        "science nature computer programming health mind power news music"
    ); // custom hook

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    /* 
    useEffect(() => {
        onSearchSubmit(
            "science nature computer programming health mind power news music"
        );
    }, []);

    const onSearchSubmit = async (term) => {
        const res = await youtube.get("/search", {
            params: { q: term },
        });
        const { items } = res.data;

        setVideos(items);
        setSelectedVideo(items[0]);
    };
 */

    return (
        // prettier-ignore
        <div className="ui container" style={{ marginTop: "20px" }}>
            <Clock />
            <SearchBar onFormSubmit={search} />

            {videos.length > 0 ? (
                <span>Found: {videos.length} results</span>
            ) : (
                ""
            )}

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>

                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

/* 
    https://console.cloud.google.com/apis/dashboard

    API-key: AIzaSyBFxjAwG1nug8D0eLAm_8tjKF5YyNmh8tA
*/
