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

    static async postPaper(json){
        return await axios.post(`${BASE_URL}papers/addPaper`, json)
            .then(data => {
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
    }

    static async login(username, password){
         const json = {
             'username': username,
             'password': password
         }
        return await axios.post(`${BASE_URL}auth/login`, json)
            .then(data => {
                if(data.status === 200){
                    window.sessionStorage.setItem('token', data.data['token'])
                    return true
                }else{
                    return false
                }
            }).catch(error => {
                return false
            })
    }
}

export default ApiClient
