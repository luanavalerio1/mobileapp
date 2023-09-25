import axios from "axios";

export const api = axios.create({
    baseURL: "https://adonis-d5it.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})

