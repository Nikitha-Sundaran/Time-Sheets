const Body = ()=>{
    return(
        <div className="p-10">
        <table className='border w-full text-white bg-blue-500'>
          <tr className="border">
            <th className='border-r font-normal' rowSpan="2">S.no</th>
            <th className='border-r font-normal' rowSpan="2">Project Name</th>
            <th className='border-r font-normal' rowSpan="2">Project Code</th>
            <th className='border-r font-normal' rowSpan="2">Allocated Time</th>
            <th className='border-r font-normal' rowSpan="2">Time Spent</th>
            <th className='pt-4 border-r font-normal' colSpan="6">
                <span className="text-sm font-normal">Week 1</span>
                <span className="text-sm font-normal text-gray-500 mx-1">Week 2</span>
                <span className="text-sm font-normal text-gray-500 mx-1">Week 3</span>
                <span className="text-sm font-normal text-gray-500 mx-1">Week 4</span>
                <div className="border"></div>
            <tr className="flex justify-evenly">
            <th className='border-r font-normal' rowSpan="2">26</th>
            <th className='border-r font-normal' rowSpan="2">27</th>
            <th className='border-r font-normal' rowSpan="2">28</th>
            <th className='border-r font-normal' rowSpan="2">29</th>
            <th className='border-r font-normal' rowSpan="2">20</th>
            <th className='border-r font-normal' rowSpan="2">31</th>
            <th className='border-r font-normal' rowSpan="2">01</th>
            <th className='' colSpan="2">02</th>
          </tr>
          </th>
            <th className='border-r font-normal'>03</th>
            <th className='border-r font-normal'>04</th>
            <th className='border-r font-normal'>05</th>
            <th className='border-r font-normal'>06</th>
            <th className='border-r font-normal'>07</th>
            <th className='border-r font-normal'>08</th>
            <th className='font-normal'>Total Hrs</th>
          </tr>
        </table>
      </div>
    )
}

export default Body;