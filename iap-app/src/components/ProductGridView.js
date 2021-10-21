import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { searchFilter } from '../redux/actions/userActions';
import Card from './Card';
function ProductGridView(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchFilter(""));
    }, []);
    
    return (
        <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 p-8">
        {
            props.user.data && props.user.data.map((asset, index) => {
                return <Card key={index} asset={asset} />
            })
        }
        </div>
    );
}
ProductGridView.propTypes = {
    searchFilter: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
   user: state.user,
});

const mapActionsToProps = {
    searchFilter
}

export default connect(mapStateToProps, mapActionsToProps)(ProductGridView);