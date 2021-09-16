import React from 'react';
import Card from './Card';
import data from './../mockdata/homepage.json';
function ProductGridView() {
    return (
        <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 p-8">
        {
            data && data.assets && data.assets.map((asset, index) => {
            return <Card key={index} asset={asset} />
            })
        }
        </div>
    );
}

export default ProductGridView;
