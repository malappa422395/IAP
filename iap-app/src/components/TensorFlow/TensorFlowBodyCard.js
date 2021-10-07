import React from 'react'

function TensorFlowBodyCard({background}) {//#f9fafb
    return (
        <div style={{borderBottom:"2px solid #e5e7eb", display:"flex",padding:"1rem",background:`${background}`,marginLeft:"1rem",marginRight:"1rem"}}>
            <div style={{flex:"1"}}>image</div>
            <div style={{flex:"7"}}>
                <div style={{fontWeight:"700", fontSize:"14px",color:"#6b7280",paddingBottom:".5rem", display:"flex"}}>
                    <div>Kedar Lachke</div>
                    <div style={{color:'#8e8e8e',fontSize:'11px',fontWeight:"500",padding:".2rem 1rem 0rem 1rem" }}>2hr ago</div></div>
                <div style={{fontSize:"10px",fontWeight:"600", color:"#6b7280"}}>
                It measures the details based on DORA recommended practise. <a style={{color:"red"}} href="https://worker2.prince.prokarma.com/home" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="0">p-Score (prokarma.com)</a>
                </div>
            </div>
            <div style={{flex:"2",letterSpacing:".7rem",fontSize:"2rem",fontWeight:"700",color:"gold",padding:".5rem"}}>*****</div>
        </div>
    )
}

export default TensorFlowBodyCard
