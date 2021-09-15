import React from 'react'
import TensorFlowBodyCard from './TensorFlowBodyCard'
// import addreview from 'images/addReview.svg'

function TensorFlowBody() {
    return (
        <div style={{margin:"2rem 0rem 0rem 0rem",background:"#fff",borderRadius:"10px", padding:"2.5rem 1rem 1rem 1rem",display:"flex", flexDirection:"row"}}>
            <div style={{flex:"7"}}>
                <TensorFlowBodyCard background={"#f9fafb"}/>
                <TensorFlowBodyCard background={"#FFFFFF"}/>
                <TensorFlowBodyCard background={"#f9fafb"}/>
                <TensorFlowBodyCard background={"#FFFFFF"}/>
            </div>
            <div style={{flex:"4"}}><img src={'images/addReview.svg'} alt=""/></div>
            
        </div>
    )
}

export default TensorFlowBody
