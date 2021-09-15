import React, { useState } from 'react';
import ReactFlow, {Handle} from 'react-flow-renderer';
const initialElements = [
  {
    id: 'interaction-1',
    type: 'special',
    data: { 
      text: '<<descirpio>>', 
      borderColor: '#DA0000', 
      textColor: '#DA0000',
      description: 'In order to use these commands you need to install mlscape CLI'
    },
    position: { x: 0, y: 0 },
    style: {width:400, cursor: 'default'},
    sourcePosition: 'bottom' 
  },
  {
    id: 'interaction-2',
    type: 'special',
    data: { 
      text: '<<Installation notes>>', 
      borderColor: '#1D2B35', 
      textColor: '#DA0000',
      description: 'To install mlscape CLI please follow these instructions'
    },
    position: { x: 0, y: 100 },
    style: {width:400, cursor: 'default'},
    targetPosition: 'top',
    sourcePosition: 'right' 

  },
  {
    id: 'interaction-3',
    type: 'special',
    sourcePosition: 'left',
    data: { 
      text: 'Kubernetes', 
      borderColor: '#106EED', 
      textColor: '#106EED',
      image: 'images/kubernetesLogo.svg',
      description: '-> mlscape launch <<image-name>>/<<tag>> --kubernetes-cluster-url <<url>>'
    },
    position: { x: 450, y: 90 },
    style: {width:590, cursor: 'default'},

  },
  {
    id: 'interaction-4',
    type: 'special',
    data: { 
      text: 'Amazon Web Services', 
      borderColor: '#FF9300', 
      textColor: '#FF9300',
      image: 'images/awsLogo.svg',
      description: '-> mlscape launch <<image-name>>/<<tag>> --AWS-cluster-url <<url>>'
    },
    position: { x: 450, y: 200 },
    style: {width:590, cursor: 'default'},
    targetPosition: 'left' 

  },
  { id: 'interaction-e1-2', source: 'interaction-1', target: 'interaction-2',arrowHeadType: 'arrowclosed', },
  { id: 'interaction-e2-3', source: 'interaction-2', target: 'interaction-3', arrowHeadType: 'arrowclosed', type: 'step', },
  { id: 'interaction-e3-4', source: 'interaction-2', target: 'interaction-4', arrowHeadType: 'arrowclosed', type: 'step', },

];

const CustomNodeComponent = (props) => {
  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="nodeFlow" style={{borderBottom: `2px solid ${props.data.borderColor}`, height: props.data.image ? '80px' : '60px'}} >
      {props.targetPosition === "top" &&<Handle type="target" position="top" style={{width: 0, height: 0, top: '0px' }} />}
      {props.targetPosition === "left" && <Handle type="target" position="left" style={{width: 0, height: 0, left: '0px' }} />}
      <div className="flex items-center">
        {props.data.image && <img className="mr-4" alt="icon" src={props.data.image}/>}
        <div>
          <div className="font-medium" style={{color: props.data.textColor}}>{props.data.text}</div>
          <div className="text-xs mt-1">{props.data.description}</div>
        </div>
        {props.data.image && <button onClick={() => copyToClipBoard(props.data.description)}>Copy</button>}
      </div>
      {props.sourcePosition === "bottom" && <Handle type="source" position="bottom" style={{width: 0, height: 0 }} />}
      {props.sourcePosition === "left" && <Handle type="source" position="left" style={{width: 0, height: 0, left: '0px' }} />}
      {props.sourcePosition === "right" && <Handle type="source" position="right" style={{width: 0, height: 0, right: '0px', }} />}
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};
const onLoad = (reactFlowInstance) =>
  reactFlowInstance.fitView({ 
    // padding: 0.2 
  });

const Flow = () => {
  const [elements, setElements] = useState(initialElements);
  return (
      <div style={{height: 300}}>
        <ReactFlow
            elements={elements}
            nodesConnectable={false}
            // elementsSelectable={false}
            zoomOnScroll={false}
            paneMoveable={false}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            zoomOnDoubleClick={false}
            onLoad={onLoad}
            className="validationflow"
            >
            </ReactFlow>
      </div>
  );
};

export default Flow;