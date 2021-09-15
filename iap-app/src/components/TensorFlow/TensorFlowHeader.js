 import React from 'react'
// import logo from '../images/tf_logo.png'
function TensorFlowHeader() {
    return (
        <div style={{borderRadius:"10px",display:"flex",background:"#fff",marginTop:"1rem",paddingTop:".5rem",paddingBottom:".5rem"}}>
            <div style={{flex:"7"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{flex:"2",display:"flex",flexDirection:"column"}}>
                        <div><img src={'images/tf_logo.png'} alt="" height="100px" weight="100px"/></div>
                    </div>
                    <div style={{flex:"8"}}>
                        <div style={{fontWeight:"700", color:"rgb(221, 53, 53)",paddingTop:".6rem"}}>TensorFlow 2.0</div>
                        <div style={{color:'#8e8e8e',fontSize:'11px',fontWeight:"500"}}>Updated 5hr ago</div>
                    </div>
                </div>
                <div class="grid gap-2 grid-cols-8 padding-1rem" style={{margin:".5rem 1rem"}}>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Container</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">x86-64</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Databases</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Linux</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Docker</span>
                    <span class="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">AMI</span></div>
            </div>
            <div style={{margin:"1rem 0rem",flex:"4",fontSize:"14px",borderLeft:"1px solid #cdcdcd",padding:"0rem 1rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
</div>
        </div>
    )
}

export default TensorFlowHeader
