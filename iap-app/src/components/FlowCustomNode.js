import React from 'react'
import {Handle} from 'react-flow-renderer';
// import copy from 'images/copy.svg';
export default function FlowCustomNode(props) {
    const copyToClipBoard = (text) => {
        navigator.clipboard.writeText(text);
    }
    return (
        <div className="nodeFlow" style={{borderBottom: `2px solid ${props.data.borderColor}`, height: props.data.image ? '80px' : '60px'}} >
            {props.targetPosition === "top" &&<Handle type="target" position="top" style={{width: 0, height: 0, top: '0px' }} />}
            {props.targetPosition === "left" && <Handle type="target" position="left" style={{width: 0, height: 0, left: '0px' }} />}
            <div className="flex items-center w-full">
            {props.data.image && <img className="mr-4" alt="icon" src={props.data.image}/>}
            <div className="w-full">
                <div className="font-medium" style={{color: props.data.textColor}}>{props.data.text}</div>
                <div className="flex items-center justify-between">
                    <span className="text-xs mt-1">{props.data.description}</span>
                    {props.data.image && 
                        <button className=" bg-gray-200 p-2 rounded-full" onClick={() => copyToClipBoard(props.data.description)}>
                            <img className="w-4 h-4" src={'images/copy.svg'} alt="icon" />
                        </button>
                    }
                </div>
            </div>
            </div>
            {props.sourcePosition === "bottom" && <Handle type="source" position="bottom" style={{width: 0, height: 0 }} />}
            {props.sourcePosition === "left" && <Handle type="source" position="left" style={{width: 0, height: 0, left: '0px' }} />}
            {props.sourcePosition === "right" && <Handle type="source" position="right" style={{width: 0, height: 0, right: '0px', }} />}
        </div>
    );
}
