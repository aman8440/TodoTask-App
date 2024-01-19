import axios from "axios"
const instance = axios.create({
    baseURL:"https://todotask-atwd.onrender.com/api"
})
export default instance
