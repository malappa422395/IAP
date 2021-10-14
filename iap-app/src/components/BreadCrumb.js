import React from 'react'

export default function BreadCrumb(props) {
    return (
        <div style={{display:'flex'}}>
            <div style={{color:"rgb(221 53 53)", fontWeight:"700"}}>Home</div>
            <div style={{fontWeight:"700", paddingLeft:".5rem", paddingRight:".5rem"}}>&gt;</div>
            <div style={{color:"rgb(105, 105, 105)", fontWeight:"700"}}>{props?.productData?.name}</div>
        </div>
    )
}
