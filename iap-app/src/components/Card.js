import kerasImage from './../images/keras.png';

function Card() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm">
      <div className="flex items-center">
        <img className="w-14" src={kerasImage} alt="brand"></img>
        <div className="ml-6 text-red-500 text-lg font-semibold">Keras</div>
      </div>
      <hr className="border-gray-400 border-1 mt-4" />
      <div className="text-gray-400 text-xs mt-2 font-medium">Updated 5hrs ago</div>
      <p className="mt-3 text-sm font-semibold mb-3 text-gray-600">Keras is a open-source software library for dataflow and differentiable ...</p>
      <hr className="border-gray-400 border-1 mb-4" />
     
      <div className="grid gap-2 grid-cols-3">
        <span className="bg-gray-200 px-5 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Container</span>
        <span className="bg-gray-200 px-5 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">x86</span>
        <span className="bg-gray-200 px-5 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Azure VM</span>
        <span className="bg-gray-200 px-5 py-1 rounded-md text-xs text-gray-500 font-semibold text-center">Linux</span>
        <span className="bg-gray-200 px-5 py-1 rounded-md text-xs text-gray-500 font-semibold col-span-2 text-center">Programming Language</span>
      </div>
    </div>
  );
}

export default Card;
