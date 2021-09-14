import axios from "axios";

const instance = axios.create({

    baseURL: "https://reels-backend.herokuapp.com"
});

export default instance;