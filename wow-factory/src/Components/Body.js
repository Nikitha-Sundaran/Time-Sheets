import { SlCalender} from 'react-icons/sl'


const Body = ()=>{
    return(
        <div>

          <div className="my-4 p-10  flex justify-between">
            <div>
            <div className="flex">
            <img
            className="rounded-full h-16 w-16"
            alt="kalaivani"
            src ="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKuVGh_-kSTkXSHg651xuvdY9DPVNEptQmLw3U5-VN8rYSPqSV"
            />
            <span className="font-semibold pl-5 text-3xl mt-1">Kalaivani</span>
            </div>

            <div>
              Lorem ipsum
            </div>

            <div className='flex'>
               Date : 04/07/2023
               <span>
                <SlCalender className='mt-1 ml-2'/>
               </span>
            </div>
          </div>



            <div className='flex'>
              <div>
                <div className='flex my-1 '>
                <div className='bg-pink-700 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2'> Sick leave(SL)</div>
                </div>

                <div className='flex my-1'>
                <div className='bg-orange-600 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2'> Casual Leave(CL)</div>
                </div>

                <div className='flex my-1'>
                <div className='bg-red-600 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2'> Absent(A)</div>
                </div>

                <div className='flex my-1'>
                <div className='bg-green-500 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2'>Holiday(H)</div>
                </div>

              </div>



              <div className='ml-6'>
                <div >
                  <div>System Maintenance(SM)</div>
                </div>
                <div>
                  <div>Training Program(TP)</div>
                </div>
                <div>
                  <div>Internal Meeting(IM)</div>
                </div>
                <div>
                  <div>Vendor Meeting(VM)</div>
                </div>
                <div>
                  <div>Development Activities(DA)</div>
                </div>
                <div>
                  <div>Break(B)</div>
                </div>
              </div>
            </div>
          </div>

        <div className="px-10">
        <table className='border w-full flex flex-col'>
          <tr className="border text-white bg-blue-500">
            <th className='border-r font-normal w-20' rowSpan="2">S.no</th>
            <th className='border-r font-normal w-32' rowSpan="2">Project Name</th>
            <th className='border-r font-normal w-20' rowSpan="2">Project Code</th>
            <th className='border-r font-normal w-24' rowSpan="2">Allocated Time</th>
            <th className='border-r font-normal w-24'  rowSpan="2">Time Spent</th>
            <th className='border-r font-normal w-24' rowSpan="2">Time Pending</th>
            <th className='pt-4 border-r font-normal w-32' colSpan="6">
                <span className="text-sm font-normal">Week 1</span>
                <span className="text-sm font-normal text-gray-500 mx-1 0">Week 2</span>
                <span className="text-sm font-normal text-gray-500 mx-1 ">Week 3</span>
                <span className="text-sm font-normal text-gray-500 mx-1 ">Week 4</span>
                <div className="border"></div>
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2">
              <div>26</div>
              <div>M</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>27</div>
              <div>T</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>28</div>
              <div>W</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>29</div>
              <div>Th</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>30</div>
              <div>F</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>01</div>
              <div>Sa</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>02</div>
              <div>S</div>
            </th>
            <th className='border-r font-normal w-10' rowSpan="2">
            <div>03</div>
              <div>M</div>
            </th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'>
            <div>03</div>
              <div>T</div>
            </th>
            <th className='border-r font-normal w-10'>
            <div>04</div>
              <div>W</div>
            </th>
            <th className='border-r font-normal w-10'>
            <div>05</div>
              <div>W</div>
            </th>
            <th className='border-r font-normal w-10'>
            <div>06</div>
              <div>Th</div>
            </th>
            <th className='border-r font-normal w-10'>
            <div>07</div>
              <div>F</div>
            </th>
            <th className='border-r font-normal w-10'>
            <div>08</div>
              <div>Sa</div>
            </th>
            <th className='font-normal w-20'>Total Hrs</th>
          </tr>
        

          <tr className="border">
            <th className='border-r font-normal w-20 text-sm  mt-2 text-blue-600' rowSpan="2">Standard</th>
            <th className='border-r font-normal w-32 text-sm ' rowSpan="2">Lorem ipsum dolar</th>
            <th className='border-r font-normal w-20' rowSpan="2">SM</th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">6</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>
        

          <tr className="border">
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Standard</th>
            <th className='border-r font-normal w-32 text-sm' rowSpan="2">Lorem ipsum </th>
            <th className='border-r font-normal w-20' rowSpan="2">TP </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">8</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Standard</th>
            <th className='border-r font-normal w-32 text-sm' rowSpan="2">Lorem ipsum </th>
            <th className='border-r font-normal w-20' rowSpan="2"> IM </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-orange-600' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">3</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Standard</th>
            <th className='border-r font-normal w-32 text-sm' rowSpan="2">Lorem ipsum </th>
            <th className='border-r font-normal w-20' rowSpan="2">VM </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">3</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Standard</th>
            <th className='border-r font-normal w-32 text-sm' rowSpan="2">Lorem ipsum dolar</th>
            <th className='border-r font-normal w-20' rowSpan="2"> DA </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-red-600' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">7</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Standard</th>
            <th className='border-r font-normal w-32 text-sm' rowSpan="2">At At</th>
            <th className='border-r font-normal w-20' rowSpan="2"> LB</th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">6</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20' rowSpan="2">01</th>
            <th className='border-r font-normal w-32 text-sm' rowSpan="2">Project Name</th>
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Code </th>
            <th className='border-r font-normal w-24 ' rowSpan="2"> 40hrs</th>
            <th className='border-r font-normal w-24' rowSpan="2"> 38hrs</th>
            <th className='border-r font-normal w-24' rowSpan="2"> -2hrs</th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10' rowSpan="2">4</th>
            <th className='border-r font-normal w-10' rowSpan="2">6</th>
            <th className='border-r font-normal w-10' rowSpan="2">4</th>
            <th className='border-r font-normal w-10' rowSpan="2">8</th>
            <th className='border-r font-normal w-10 bg-pink-700' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2">4</th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10 bg-green-500 text-green-500' rowSpan="2">9</th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'>8</th>
            <th className='border-r font-normal w-10'>4</th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20' rowSpan="2">02</th>
            <th className='border-r font-normal w-32' rowSpan="2"></th>
            <th className='border-r font-normal w-20' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10 text-white' rowSpan="2">4</th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className='border-r font-normal w-20 text-sm' rowSpan="2">Insert project</th>
            <th className='border-r font-normal w-32' rowSpan="2"></th>
            <th className='border-r font-normal w-20' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-24' rowSpan="2"> </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10 text-white' rowSpan="2">8</th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


          <tr className="border">
            <th className=' font-normal w-48 p-2' rowSpan="2">
            <div className='flex my-1 '>
                <div className='bg-pink-700 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2 text-sm'> Sick leave(SL)</div>
            </div>
            <div className='flex my-1'>
                <div className='bg-orange-600 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2 text-sm'> Casual Leave(CL)</div>
                </div>

                <div className='flex my-1'>
                <div className='bg-red-600 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2 text-sm'> Absent(A)</div>
                </div>

                <div className='flex my-1'>
                <div className='bg-green-500 w-2 h-2 rounded-full mt-2'></div>
                <div className='ml-2 text-sm'>Holiday(H)</div>
                </div>


            </th>
            
            <th className='border-r font-normal w-24 ' rowSpan="2">
              <div className='text-sm'>
                <div className='mt-8'>Total Hours</div>
                <div className='my-1'>Regular Hours</div>
                <div className='my-1'>OT Hours</div>
              </div>
               </th>
            <th className='border-r font-normal w-24 text-green-500' rowSpan="2"> 40</th>
            <th className='border-r font-normal w-24 text-green-500' rowSpan="2">42</th>
            <th className='border-r font-normal w-24 text-green-500' rowSpan="2">2 </th>
            <th className='border-r font-normal w-32' colSpan="6">
    
          <tr className="flex justify-evenly">
            <th className='border-r font-normal w-10 ' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
            <th className='border-r font-normal w-10' rowSpan="2"></th>
          </tr>
          </th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='border-r font-normal w-10'></th>
            <th className='font-normal w-20'></th>
          </tr>


        </table>
      </div>
      </div>
    )
}

export default Body;