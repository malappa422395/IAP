import React,  { useState, useEffect } from 'react';
import TensorFlow from './../components/TensorFlow'
import Flow from '../components/Flow';
import { useParams } from "react-router-dom";


function Product() {
    const params = useParams();
    const [productData, SetProductData] = useState({});

    const getData=()=>{
        fetch(`/asset_${params.assetid}.json`,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            SetProductData(myJson)
          });
      }
  useEffect(() => {
    // SetProductData({name:"malappa"});
    getData();
  });

    return (
        <div>
            <TensorFlow productData={productData}/>
            {/* <Flow /> */}
        </div>
    );
}

export default Product;
