import React from 'react'
import BreadCrumb from '../BreadCrumb'
import TensorFlowHeader from './TensorFlowHeader'
import TensorFlowBody from './TensorFlowBody'
function TensorFlow(props) {
    return (
        <>
          <div style={{padding:'1rem',background:'rgba(243, 244, 246)',height:'100vh'}}>
            <BreadCrumb productData={props.productData}/>
            <TensorFlowHeader productData={props.productData}/>
            <TensorFlowBody productData={props.productData}/>
          </div> 
        </>
    )
}

export default TensorFlow
