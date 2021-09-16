import React from 'react';
import { useHistory } from "react-router-dom";

function PageNotFound() {
    const history = useHistory();

    return (
        <div className="flex items-center justify-center w-4/5 h-96 pt-8">
            <div className="grid grid-cols-2 divide-x divide-green-500">
                <span className="text-red-600 text-5xl font-bold text-right mr-6">404</span>
                <div>
                    <div className="flex flex-col">
                        <span className="font-bold text-5xl ml-6">Page not found</span>
                        <span className="mt-2 text-gray-400 ml-6">Please check the URL in the address bar and try again.</span>
                    </div>
                    <div className="ml-6 mt-4">
                        <button onClick={() => history.push('/')} class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-blue-red rounded">
                            Go back home
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default PageNotFound;
