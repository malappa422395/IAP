import { useHistory } from "react-router-dom";

function Card(props) {
  const history = useHistory();
  const openProduct = () => {
    history.push('/product')
  }
  return (
    <div onClick={()=> openProduct()} className="bg-white rounded-lg p-4 shadow-lg max-w-sm cursor-pointer">
      <div className="flex items-center h-10">
        {/* <img className="object-cover h-12" src={props.asset.image} alt="brand"></img> */}
        <div className="ml-2 text-red-500 text-lg font-semibold">{props.asset.name} {props.asset.version}</div>
      </div>
      <hr className="border-gray-400 border-1 mt-4" />
      <div className="text-gray-400 text-xs mt-2 font-medium">Updated {props.asset.updated}hrs ago</div>
      <p className="mt-3 text-sm font-semibold mb-3 text-gray-600 overflow-ellipsis overflow-hidden h-16">{props.asset.description}</p>
      <hr className="border-gray-400 border-1 mb-4" />
     
      <div className="grid gap-2 grid-cols-3">
        {props.asset.techlogies.map((tech,index)=>{
            if(props.asset.techlogies.length === 5 && index === 4){
              return(
                <span key={index} className="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center col-span-2">{tech.name}</span>
              )
            }
            return(
              <span key={index} className="bg-gray-200 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">{tech.name}</span>
            )
        })}
      </div>
    </div>
  );
}

export default Card;
