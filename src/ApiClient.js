const axios = require("axios");
const BASE_URL = "http://localhost:8080/"


class ApiClient {

     async getTodoList() {
        const json = await axios.get(`${BASE_URL}todo/getList`)
         console.debug(json.data)
         return json.data
    }
}

export default ApiClient
