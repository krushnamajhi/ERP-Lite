import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShowFormHeader(props) {

    const navigate = useNavigate()

    const getHeader = () => {
        if (props.newrecord == true) {
            return "ADD " + props.recordtype.toUpperCase()
        }
        else {
            return props.name.toUpperCase()
        }
    }
    
    const openListPage = () => {
        navigate("/" + props.recordtype + "/" + props.recordtype + "list")
    }
    

    return (
        <div>
            <table className='table'>
                <tbody>
                    <tr>
                        <td style={{width: '90%'}}>
                            <h2 className='text-center'>{getHeader()}</h2>
                        </td>
                        <td className='text-right'>
                            <button className='btn btn-info btn-sm' style={{width:'100%'}} onClick={openListPage}>List</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <hr/> */}
        </div>
    );
}

export default ShowFormHeader;