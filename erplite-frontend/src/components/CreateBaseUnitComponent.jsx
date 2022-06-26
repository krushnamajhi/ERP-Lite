import React, { useEffect, useRef, useState } from 'react';
import BaseUnitService from '../services/BaseUnitService';
import ShowFormHeader from '../functions/ShowFormHeader';
import { useNavigate } from 'react-router-dom';

function CreateBaseUnitComponent(props) {
    const recordType = 'baseunit'
    const [id, setId] = useState(0)
    let [name, setName] = useState('')
    const [pluralName, setPluralName] = useState('')
    const [abbreviation, setAbbreviation] = useState('')
    const [pluralAbbreviation, setPluralAbbreviation] = useState('')
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
                BaseUnitService.getBaseUnitByid(id).then((res) => {
                    let baseunit = res.data;
                    setName(baseunit.name)
                    setPluralName(baseunit.pluralName)
                    setAbbreviation(baseunit.abbreviation)
                    setPluralAbbreviation(baseunit.pluralAbbreviation)
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
    function handlePluralNameChange(e) {
        setPluralName(e.target.value)
    }
    function handleAbbreviationChange(e) {
        setAbbreviation(e.target.value)
    }
    function handlePluralAbbreviationChange(e) {
        setPluralAbbreviation(e.target.value)
    }

    function resetBaseUnit(e) {
        e.preventDefault();
        setName('')
        setPluralAbbreviation('')
        setPluralName('')
        setAbbreviation('')
    }

    const openListPage = (message) => {
        alert(message)
        navigate("/" + props.recordtype + "/" + props.recordtype + "list")
    }

    function saveBaseUnit(e) {
        e.preventDefault();
        let baseunit = { name: name, pluralName: pluralName, abbreviation: abbreviation, pluralAbbreviation:pluralAbbreviation }
        if (baseunit.name === "" && baseunit.pluralName === "" && baseunit.abbreviation === "" && baseunit.pluralAbbreviation === "") {
            alert('Please enter BaseUnit details before Saving')
            return
        }
        if (newRecord) {
            BaseUnitService.createBaseUnit(baseunit).then(res => {
                alert('BaseUnit created successfully')
            })
        }
        else {
            BaseUnitService.updatebaseunitByid(baseunit, id).then(res => alert('BaseUnit is updated Successfully'))
        }
    }

    const deleteRecord = (e) => {
        console.log(id)
        BaseUnitService.deleteBaseUnitById(id).then((res) => {
            alert("Deleted baseunit")
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
                                        <label>Unit Name</label>
                                        <br />
                                        <input placeholder='Base Unit Name' name='baseunitName' disabled={!edit} className='form-control' value={name} onChange={handleNameChange} />
                                    </div>
                                    <br />
                                    <div className='container'>
                                        <label>Plural Name</label>
                                        <input placeholder='Plural Number' name='pluralName' className='form-control' value={pluralName} onChange={handlePluralNameChange} disabled={!edit} />
                                    </div>
                                    <br />
                                    <div className='container'>
                                        <label>UNIT Abbreviation</label>
                                        <br />
                                        <input placeholder='Abbreviation of Unit' name='abbreviation' className='form-control' value={abbreviation} onChange={handleAbbreviationChange} disabled={!edit} />
                                    </div>
                                    <br/>
                                    <div className='container'>
                                        <label>UNIT Abbreviation in Plural</label>
                                        <br />
                                        <input placeholder='Abbreviation of Unit in Plural' name='pluralAbbriviation' className='form-control' value={pluralAbbreviation} onChange={handlePluralAbbreviationChange} disabled={!edit} />
                                    </div>
                                    { edit==true ? (
                                        <div className='col'>
                                            <br />
                                            <button className='btn btn-success' onClick={saveBaseUnit}>{saveButtonText}</button>
                                            <button className='btn btn-primary' onClick={resetBaseUnit} style={{ marginLeft: "10px" }}>Reset</button>
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

export default CreateBaseUnitComponent;

function useShowSaveOrUpdate(newRecord) {
    return newRecord ? "Save" : "Update"
}
