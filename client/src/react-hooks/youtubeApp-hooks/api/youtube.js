import axios from "axios";

const KEY = "AIzaSyBFxjAwG1nug8D0eLAm_8tjKF5YyNmh8tA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 30,
        key: KEY,
    },
});
