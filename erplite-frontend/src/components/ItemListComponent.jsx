import React, { useEffect, useRef, useState } from 'react';
import ListActions from '../functions/ListActions';
import ItemService from '../services/ItemService';
import { useHandleNewButton, useSearchRecordByName } from '../functions/Utilities'
import ListHeader from '../functions/ListHeader';
import RecordTypes from '../functions/RecordTypes';


function ItemListComponent(props) {

    //variables
    const [items, setItems] = useState([])
    const [searchName, setSearchName] = useState('')
    const searchByName = useSearchRecordByName()
    const recordType = "item"
    const recordProps = RecordTypes.getRecord(recordType)

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            ItemService.getItems().then((res) => {
                setItems(res.data);
            })
        }
        isInitialMount.current = false
    })

    function handleSearchNameChange(e) {
        setSearchName(e.target.value)
    }

    function searchItem() {
        ItemService.getItems().then(({ data }) => {
            setItems(searchByName(data, searchName))
        })
    }

    return (
        <div className='container'>
            <ListHeader recordtype={recordType} />
            <div className='my-4'>
                <label className='text-center mx-3'>SEARCH {recordProps.name.toUpperCase()}</label>
                <input name="searchRecordName" value={searchName} onChange={handleSearchNameChange} className='mx-3' />
                <button className='btn btn-primary mx-3' onClick={searchItem}>Search</button>
            </div>
            <br />
            <div className='row'>
                <table className='table table-bordered text-center table-sm table-hover'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>HSN/SAC</th>
                            <th>BASE UNIT</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(
                                item =>
                                    <tr key={item.id}>
                                        <td> {item.name}</td>
                                        <td> {item.hsn_sac}</td>
                                        <td> {item.baseunit}</td>
                                        <ListActions className="container" recordType="item" recordid={item.id} />
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}


export default ItemListComponent;