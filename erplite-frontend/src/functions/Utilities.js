import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useHandleNewButton(recordType) {

    const navigate = useNavigate()

    const useOpenNewRecordPage = () => {
        console.log("Hi")
        navigate("/" + recordType + "/create-" + recordType)
    }

    return {
        className: 'btn btn-info',
        innerText: ('New ' + recordType).toUpperCase(),
        onClick: useOpenNewRecordPage
    }
}

function useAutoSuggestion(inputValue, records) {
    const [searchResults, setSearchResults] = useState(records)
    if (inputValue.length > 0) {
        let matches = []
        matches = searchResults.filter(record => {
            const regex = new RegExp(`${inputValue}`, "gi");
            return record.name.match(regex)
        })
        return matches
    }
    else {
        return searchResults
    }
}

function useSearchRecordByName() {
    return ((data, searchName) => {
        if (searchName.length > 0) {
            let matches = []
            matches = data.filter(record => {
                const regex = new RegExp(`${searchName}`, "gi");
                return record.name.match(regex)
            })
            return matches;
        }
        else {
            return data;
        }
    })
}

export { useHandleNewButton, useAutoSuggestion, useSearchRecordByName }
