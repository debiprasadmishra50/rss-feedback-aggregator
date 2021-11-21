import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID sYzgkJ_Rozyeuii_dQaSIoOLTbaqHXVR3z-AogoQ40k",
    },
});
