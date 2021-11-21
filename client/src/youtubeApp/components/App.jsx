import React from "react";

import youtube from "../api/youtube";

import Clock from "./Clock";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount() {
        this.onSearchSubmit(
            "science nature computer programming health mind power news music"
        );
    }

    async onSearchSubmit(term) {
        const res = await youtube.get("/search", {
            params: { q: term },
        });
        const { items } = res.data;

        this.setState({ videos: items, selectedVideo: items[0] });
    }

    onVideoSelect(video) {
        this.setState({ selectedVideo: video });
        console.log(this);
    }

    render() {
        return (
            // prettier-ignore
            <div className="ui container" style={{ marginTop: "20px" }}>
                <Clock />
                <SearchBar onFormSubmit={this.onSearchSubmit.bind(this)} />

                {this.state.videos.length > 0 ? (
                    <span>Found: {this.state.videos.length} results</span>
                ) : (
                    ""
                )}

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

/* 
    https://console.cloud.google.com/apis/dashboard

    API-key: AIzaSyBFxjAwG1nug8D0eLAm_8tjKF5YyNmh8tA
*/
