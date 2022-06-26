import axios from "axios";
import configData from "../config.json"


const ERP_BASE_URL = `${configData.API.BaseUrl}/baseunit`
const ITEM_API_LIST_URL = ERP_BASE_URL + "/baseunitlist"
const ITEM_API_CREATE_URL = ERP_BASE_URL + "/createBaseUnit"

class BaseUnitService{

    getBaseUnits(){
        return axios.get(ITEM_API_LIST_URL);
    }

    createBaseUnit(baseunit){
        return axios.post(ITEM_API_CREATE_URL,baseunit)
    }

    getBaseUnitByid(baseunitId){
        return axios.get(ERP_BASE_URL + "/" + baseunitId)
    }

    updatebaseunitByid(baseunit,id){
        return axios.put(ERP_BASE_URL + "/" + id, baseunit)
    }

    deleteBaseUnitById(id){
        return axios.delete(ERP_BASE_URL + "/" + id)
    }
}

export default new BaseUnitService()