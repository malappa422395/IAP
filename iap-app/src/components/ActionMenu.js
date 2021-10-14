function ActionMenu(props) {
    console.log("props", props)
   return (
    <div className="ml-8 mt-4 flex justify-between pr-8">
        <div>
            <div className="text-sm font-semibold">1 - 2 of 3 available images.</div>
            <div className="flex mt-4">
                {
                    props.selectedFilterData.map((filter) => {
                        return (
                            <div key={filter} className="bg-blue-100 rounded-full px-4 py-2 font-normal text-xs flex mr-4">
                                <span className="mr-3">{filter}</span>
                                <div style={{fontSize: '10px'}} className="grid place-items-center rounded-full bg-gray-600 w-4 h-4 text-xs text-white">x</div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
        {/* <div className="flex items-center">
            <svg className="mr-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="8" rx="2" fill="#DA0000"/>
                <rect x="10" width="8" height="8" rx="2" fill="#DA0000"/>
                <rect x="10" y="10" width="8" height="8" rx="2" fill="#DA0000"/>
                <rect y="10" width="8" height="8" rx="2" fill="#DA0000"/>
            </svg>
            <div className="relative inline-block text-left">
                <div>
                    <button type="button" className="inline-flex justify-center items-center w-full rounded border border-gray-300 shadow-sm p-2 py-1 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Most Popular
                        <svg className="ml-8" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" fillOpacity="0.54"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div> */}
       
    </div>
  );
}

export default ActionMenu;
