import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import Filter from './Filter';
import { searchFilterArray } from '../redux/actions/userActions';


function Sidebar() {
    const location = useLocation();
    const dispatch = useDispatch();

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

        dispatch(searchFilterArray(selectedFilterData))
        // console.log("selectedFilterData", selectedFilterData)

    };

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        updateSelectedFilterData(selectedFilterData);
    }, [selectedFilterData]);
    return (
        location.pathname === "/home" || location.pathname === "/" ? (
        <div className="flex flex-col w-64 fixed top-16 h-screen overflow-hidden bg-sidebarDark border-t-1 border-red-700" >
            <div>
                <Filter key="filter" getCheckedFilter={sendDataToParent}></Filter>
            </div>
        </div>): <></>
    );
}


Sidebar.propTypes = {
    searchFilterArray: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
   user: state.user,
});
const mapActionsToProps = {
    searchFilterArray
}

export default connect(mapStateToProps, mapActionsToProps)(Sidebar);
