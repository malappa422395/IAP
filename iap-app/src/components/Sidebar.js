import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from './Filter';

function Sidebar() {
    const location = useLocation();
    

    const [selectedFilterData, updateSelectedFilterData] = useState([]);
    const sendDataToParent = (data, event) => {
        if (selectedFilterData.indexOf(data) === -1 && event.target.checked) {
        selectedFilterData.push(data);
        } else if (!event.target.checked) {
        const index = selectedFilterData.indexOf(data);
        if (index > -1) {
            selectedFilterData.splice(index, 1);
        }
        }
        updateSelectedFilterData(selectedFilterData);
        console.log("selectedFilterData", selectedFilterData)

    };

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        updateSelectedFilterData(selectedFilterData);
    }, [selectedFilterData]);
    return (
        location.pathname === "/home" || location.pathname === "/" ? (
        <div className="flex flex-col w-64 fixed top-14 h-screen overflow-hidden bg-sidebarDark border-t-2 border-red-700" >
            <div>
                <Filter key="filter" getCheckedFilter={sendDataToParent}></Filter>
            </div>
        </div>): <></>
    );
}

export default Sidebar;
