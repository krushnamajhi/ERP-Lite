import axios from "axios";
import configData from "../config.json"

const USER_API_BASE_URL = `${configData.API.BaseUrl}/users`

class UserService{

    getEmployees(){
        return axios.get(USER_API_BASE_URL);
    }
}

export default new UserService()