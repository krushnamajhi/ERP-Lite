import axios from "axios";
import configData from "../config.json"

const ERP_BASE_URL = `${configData.API.BaseUrl}/item`
const ITEM_API_LIST_URL = ERP_BASE_URL + "/itemlist"
const ITEM_API_CREATE_URL = ERP_BASE_URL + "/createItem"

class ItemService{

    getItems(){
        return axios.get(ITEM_API_LIST_URL);
    }

    createItem(item){
        return axios.post(ITEM_API_CREATE_URL,item)
    }

    getItemByid(itemId){
        return axios.get(ERP_BASE_URL + "/" + itemId)
    }

    updateitemByid(item,id){
        return axios.put(ERP_BASE_URL + "/" + id, item)
    }

    deleteItemById(id){
        return axios.delete(ERP_BASE_URL + "/" + id)
    }
}

export default new ItemService()