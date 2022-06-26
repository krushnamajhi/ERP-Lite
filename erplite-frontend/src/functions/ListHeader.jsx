import React, { useState } from 'react';
import RecordTypes from './RecordTypes';
import { useHandleNewButton } from './Utilities';

function ListHeader(props) {
    const recordName = props.recordtype
    const showNew = props.shownew
    const creatitem = useHandleNewButton(props.recordtype)

    return (
        <div className='row'>
            <h2 className='text-center'>{RecordTypes.getRecord(recordName).plural.toUpperCase()}</h2>
            {showNew != "false" ? <button className={creatitem.className} onClick={creatitem.onClick}>{creatitem.innerText}</button> : <br />}
        </div>
    );
}

export default ListHeader;