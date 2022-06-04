import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.100.20:1337/'
})

export default api