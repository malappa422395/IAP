import React from 'react';
import ActionMenu from './../components/ActionMenu';
import ProductGridView from './../components/ProductGridView';
import Sidebar from '../components/Sidebar';
function Home() {
    // need to update selectedFilterData from redux state
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
            <Sidebar />
            <div className="ml-64 w-full">
                <ActionMenu key="actionMenu" selectedFilterData={[]}/>
                <ProductGridView />
            </div>
        </div>
    );
}

export default Home;
