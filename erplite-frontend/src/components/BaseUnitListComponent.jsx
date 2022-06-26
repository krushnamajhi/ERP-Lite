import React, { useEffect, useRef, useState } from 'react';
import ListActions from '../functions/ListActions';
import ListHeader from '../functions/ListHeader';
import RecordTypes from '../functions/RecordTypes';
import { useHandleNewButton, useSearchRecordByName } from '../functions/Utilities'
import BaseUnitService from '../services/BaseUnitService';


function BaseUnitListComponent(props) {

    //variables
    const [baseunits, setBaseUnits] = useState([])
    const searchByName = useSearchRecordByName()
    const [searchName, setSearchName] = useState('')
    const recordType = "user"
    const recordProps = RecordTypes.getRecord(recordType)
    const isInitialMount = useRef(true);


    useEffect(() => {
        if (isInitialMount.current) {
            BaseUnitService.getBaseUnits().then((res) => {
                setBaseUnits(res.data);
            })
            isInitialMount.current = false
        }
    })

    function handleSearchNameChange(e) {
        setSearchName(e.target.value)
    }

    function searchItem() {
        BaseUnitService.getBaseUnits().then(({ data }) => {
            setBaseUnits(searchByName(data, searchName))
        })
    }

    return (
        <div className='container'>

            <ListHeader recordtype="baseunit" />

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
                            <th>PLURAL NAME</th>
                            <th style={{ width: "12%" }}>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            baseunits.map(
                                baseunit =>
                                    <tr key={baseunit.id}>
                                        <td> {baseunit.name + " ( " + baseunit.abbreviation + " )"}</td>
                                        <td> {baseunit.pluralName + " ( " + baseunit.pluralAbbreviation + " )"}</td>
                                        <td>
                                            <ListActions className="container" recordType="baseunit" recordid={baseunit.id} />
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default BaseUnitListComponent;