import axios from "axios";

const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";

function rsstojson(url) {
    return axios.get(`${corsUrl}${url}`);
}

export default rsstojson;
