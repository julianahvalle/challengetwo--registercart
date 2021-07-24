import axios from "axios";

const api = axios.create({
    baseURL:'https://my-json-server.typicode.com/julianahvalle/server-gama-academy-store/produtos'
})

export default api;