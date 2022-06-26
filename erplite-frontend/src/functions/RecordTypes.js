
const name = {
    "item": {
        "name": "Item",
        "plural": "Items"
    },
    "baseunit": {
        "name": "Unit",
        "plural": "Units"
    },
    "user":{
        "name":"User",
        "plural":"Users"
    }
}

class RecordTypes {

    getRecord(type) {
        return name[type];
    }

}
export default new RecordTypes();