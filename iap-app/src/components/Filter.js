import filterData from './../mockdata/Filter.json';


function Filter(props) {

    return (
        <div className="overflow-y-auto max-h-screen">
            <div key="Filters" className="ml-10 mr-5 mb-20 cursor-pointer">
                {filterData.Filters.map((data, index) => {
                    return (
                        <div key={data.Type} className="mt-3">
                            <div className="text-white mb-2">{data.Type}</div>
                            {data.list.map(data => {
                                return (
                                    <div key={data}>
                                        <label className="inline-flex items-center cursor-pointer" onChange={props.getCheckedFilter.bind(this,data)}>
                                            <input type="checkbox" className="form-checkbox cursor-pointer" />
                                            <span className="ml-2 text-white">{data}</span>
                                        </label>
                                    </div>
                                )
                            })}
                            {
                                (filterData.Filters?.length !== (index + 1)) &&
                                <hr className="border-gray-400 border-1 mt-4" />
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default Filter;