 import React from 'react'
// import logo from '../images/tf_logo.png'
function TensorFlowHeader() {
    return (
        <div className="rounded" style={{borderRadius:"10px",display:"flex",background:"#fff",marginTop:"1rem",paddingTop:".5rem",paddingBottom:".5rem"}}>
            <div style={{flex:"7"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{flex:"1",display:"flex",flexDirection:"column"}}>
                        {/* <div><img src={'images/tf_logo.png'} alt="" height="100px" weight="100px"/></div> */}
                    </div>
                    <div style={{flex:"10"}}>
                        <div style={{fontWeight:"700", color:"rgb(221, 53, 53)",paddingTop:".6rem"}}>PK-Score</div>
                        <div style={{color:'#8e8e8e',fontSize:'11px',fontWeight:"500"}}>Updated 5hr ago</div>
                    </div>
                </div>
                <div class="grid gap-2 grid-cols-8 padding-1rem" style={{margin:".5rem 1rem"}}>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">DevOps</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Assessment</span>
                    {/* <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Databases</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Linux</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Docker</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">AMI</span> */}
                </div>
            </div>
            <div style={{margin:"1rem 0rem",flex:"4",fontSize:"14px",borderLeft:"1px solid #cdcdcd",padding:"0rem 1rem"}}>
                Access the maturity of current DevOps tools and provides a Radar graph of current score with the industry standard.
            </div>
        </div>
    )
}

export default TensorFlowHeader
