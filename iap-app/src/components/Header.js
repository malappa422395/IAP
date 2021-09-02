import DP from './../images/dp.jpg';

function Header() {
  return (
    <div className="flex w-full border-b">
        <span className="w-auto flex justify-end items-center text-gray-500 p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
        </span>
        <input className="w-full bg-gray-100 px-4 outline-none" type="text" placeholder="Search for tags, name, libraries" />
        <button className="hover:bg-gray-200 text-white px-4 border-l border-r">
            <div className="bg-gray-400 w-6 h-6 text-sm rounded-full grid place-items-center">
                ?
            </div>
        </button>
        <div className="flex items-center pl-4">
            <div className="h-8 w-8 rounded-full ">
                <img className="w-8 h-8 rounded-full object-cover max-w-none " src={DP} alt="display picture" />
            </div>
            <div className="text-sm font-semibold text-black ml-4 mr-2 whitespace-nowrap">Sandeep Siddam</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" fill-opacity="0.54"/>
            </svg>
        </div>
    </div>
  );
}

export default Header;
