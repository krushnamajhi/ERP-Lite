import React from 'react';

function FormActions(props) {

    const showSaveButton = () => {
        console.log(props.recordid)
        if (props.recordid == -1)
            return "Save"
        else
            return "Update"
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                        <button className='btn btn-success'>{showSaveButton()}</button>
                        </td>
                        <td>
                            <button className='btn btn-danger' style={{ marginLeft: "10px" }}>Clear</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormActions;