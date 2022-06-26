import React, { useEffect, useRef, useState } from 'react';
import ItemService from '../services/ItemService';
import ShowFormHeader from '../functions/ShowFormHeader';
import { useNavigate } from 'react-router-dom';

function CreateItemComponent(props) {
    const recordType = 'item'
    const [id, setId] = useState(0)
    let [name, setName] = useState('')
    const [hsn_sac, setHsnSac] = useState('')
    const [baseunit, setBaseunit] = useState('')
    const [edit, setEdit] = useState(true)
    const [newRecord, setNewRecord] = useState(true)
    const saveButtonText = useShowSaveOrUpdate(newRecord)
    const isInitialMount = useRef(true);
    const navigate = useNavigate()


    useEffect(() => {
        if (isInitialMount.current) {
            const params = (new URL(document.location)).searchParams
            setId(Number(params.get("id")))
            if (id != 0) {
                setNewRecord(false)
                ItemService.getItemByid(id).then((res) => {
                    let item = res.data;
                    setName(item.name)
                    setHsnSac(item.hsn_sac)
                    setBaseunit(item.baseunit)
                })
                if (params.get("e") == "F") {
                    setEdit(false);
                }
                isInitialMount.current = false
            }
        }
    })

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleHsnSacChange(e) {
        setHsnSac(e.target.value)
    }
    function handleBaseunitChange(e) {
        setBaseunit(e.target.value)
    }

    function resetItem(e) {
        e.preventDefault();
        setName('')
        setBaseunit('')
        setHsnSac('')
    }

    const openListPage = (message) => {
        alert(message)
        navigate("/" + props.recordtype + "/" + props.recordtype + "list")
    }

    function saveItem(e) {
        e.preventDefault();
        let item = { name: name, hsn_sac: hsn_sac, baseunit: baseunit }
        if (item.name === "" && item.hsn_sac === "" && item.baseunit === "") {
            alert('Please enter Item details before Saving')
            return
        }
        if (newRecord) {
            ItemService.createItem(item).then(res => {
                alert('Item created successfully')
            })
        }
        else {
            ItemService.updateitemByid(item, id).then(res => alert('Item is updated Successfully'))
        }
    }

    const deleteRecord = (e) => {
        console.log(id)
        ItemService.deleteItemById(id).then((res) => {
            alert("Deleted item")
        })
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div>
                        <ShowFormHeader className="row" name={name} newrecord={newRecord} recordtype={recordType} />
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <div className='container'>
                                        <label>Item Name</label>
                                        <br />
                                        <input placeholder='Item Name' name='itemName' disabled={!edit} className='form-control' value={name} onChange={handleNameChange} />
                                    </div>
                                    <br />
                                    <div className='container'>
                                        <label>HSN/SAC Number</label>
                                        <input placeholder='HSN/SAC Number' name='hsn_sac' className='form-control' value={hsn_sac} onChange={handleHsnSacChange} disabled={!edit} />
                                    </div>
                                    <br />
                                    <div className='container'>
                                        <label>Base Unit of Measurement</label>
                                        <br />
                                        <input placeholder='Base Unit of Measurement' name='baseunit' className='form-control' value={baseunit} onChange={handleBaseunitChange} disabled={!edit} />
                                    </div>
                                    { edit==true ? (
                                        <div className='col'>
                                            <br />
                                            <button className='btn btn-success' onClick={saveItem}>{saveButtonText}</button>
                                            <button className='btn btn-primary' onClick={resetItem} style={{ marginLeft: "10px" }}>Reset</button>
                                            <button className='btn btn-danger' onClick={deleteRecord} style={{ marginLeft: "10px" }}>Delete</button>
                                        </div>
                                    ):<br />
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateItemComponent;

function useShowSaveOrUpdate(newRecord) {
    return newRecord ? "Save" : "Update"
}
