import React, { Component, useEffect, useRef, useState } from 'react';
import ListActions from '../functions/ListActions';
import ListHeader from '../functions/ListHeader';
import RecordTypes from '../functions/RecordTypes';
import { useSearchRecordByName } from '../functions/Utilities';
import UserService from '../services/UserService';

function ListUsersComponent(props) {

    const [users,setUsers] = useState([])
    const searchByName = useSearchRecordByName()
    const [searchName, setSearchName] = useState('')
    const recordType = "user"
    const recordProps = RecordTypes.getRecord(recordType)

    const isInitialMount = useRef(true);


    useEffect(()=>{
        if(isInitialMount.current){
            UserService.getEmployees().then((res) => setUsers(res.data))
            isInitialMount.current = false
        }
    })

    function handleSearchNameChange(e) {
        setSearchName(e.target.value)
    }

    function searchItem() {
        UserService.getEmployees().then(({ data }) => {
            setUsers(searchByName(data, searchName))
        })
    }

    return (
        <div className='container'>

        <ListHeader shownew="false" recordtype="user"/>
        <div className='my-4'>
                <label className='text-center mx-3'>SEARCH {recordProps.name.toUpperCase()}</label>
                <input name="searchRecordName" value={searchName} onChange={handleSearchNameChange} className='mx-3' />
                <button className='btn btn-primary mx-3' onClick={searchItem}>Search</button>
            </div>

        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            user => 
                                <tr key = {user.id}>
                                    <td> {user.name}</td>
                                    <td> {user.email}</td>
                                    <ListActions className="container" recordType="user" recordid = {user.id}/>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
);
}

export default ListUsersComponent;