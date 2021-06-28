const axios = require("axios");
const BASE_URL = "http://localhost:8080/"


class ApiClient {

     static async getTodoList() {
        const json = await axios.get(`${BASE_URL}todo/getList`)
            .then(data =>{
                console.log(`data back -> ${data}`)
                return data.data
            })
         return json
    }
}

export default ApiClient
