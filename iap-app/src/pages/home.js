import React from 'react';
import Card from './../components/Card';
import ActionMenu from './../components/ActionMenu';
import data from './../mockdata/homepage.json';
import Sidebar from '../components/Sidebar';
function Home() {
    // need to update selectedFilterData from redux state
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
            <Sidebar />
            <div className="ml-64 w-full">
                <ActionMenu key="actionMenu" selectedFilterData={[]}/>
                <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 p-8">
                {
                    data && data.assets && data.assets.map((asset, index) => {
                    return <Card key={index} asset={asset} />
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default Home;
