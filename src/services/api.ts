import axios from "axios";

export const api = axios.create({
    baseURL: " http://adonis-d5it.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})

