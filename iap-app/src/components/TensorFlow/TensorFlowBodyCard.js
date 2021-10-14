import React from 'react'

function TensorFlowBodyCard(props) {
    return (
        <div className="bg-white rounded-lg p-4 m-4 shadow-lg cursor-pointer">
            {/* <div style={{flex:"1"}}>image</div> */}
            <div style={{flex:"7"}}>
                <div style={{fontWeight:"700", fontSize:"14px",color:"#6b7280",paddingBottom:".5rem", display:"flex"}}>
                    <div>Description</div>
                    {/* <div style={{color:'#8e8e8e',fontSize:'11px',fontWeight:"500",padding:".2rem 1rem 0rem 1rem" }}>2hr ago</div> */}
                </div>
                <div style={{fontSize:"10px",fontWeight:"600", color:"#6b7280"}}>
                    {props?.productData?.description}
                </div>
                <div>
                    Link: <a style={{color:"red"}} href={props?.productData?.url} target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="0">{props?.productData?.label} ({props?.productData?.title})</a>
                </div>
            </div>
            {/* <div style={{flex:"2",letterSpacing:".7rem",fontSize:"2rem",fontWeight:"700",color:"gold",padding:".5rem"}}>*****</div> */}
        </div>
    )
}

export default TensorFlowBodyCard
