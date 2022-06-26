import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListActions(props) {
    const navigate = useNavigate()

    const openEditPage = () => {
        navigate("/" + props.recordType + "/" + props.recordType + "?e=T&id=" + props.recordid)
    }

    const viewRecord = () => {
        navigate("/" + props.recordType + "/" + props.recordType + "?e=F&id=" + props.recordid)
    }

    return (
        <td style={{ width: "15%" }} >      
        <table className='container'>
            <tbody>
                <tr className='col'>
                    <td style={{width:'50%'}}>
                        <button className='btn btn-info btn-sm' style={{width:'100%'}} recordid={props.recordid} onClick={openEditPage}>Edit</button>
                    </td>
                    <td style={{width:'50%'}}>
                        <button className='btn btn-info btn-sm' style={{width:'100%'}} recordid={props.recordid} onClick={viewRecord}>View</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </td>
    );
}

export default ListActions;