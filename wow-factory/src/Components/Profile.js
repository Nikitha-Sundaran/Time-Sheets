import { BiSolidDashboard , BiHelpCircle , BiMessageRoundedDots} from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdTask} from 'react-icons/md';
import { FiUsers ,FiLogOut } from 'react-icons/fi';
import { AiFillClockCircle ,AiOutlineSearch} from 'react-icons/ai';
import { BsFilter  } from 'react-icons/bs'
import timesheet from '../timesheet.png'

const Profile= ()=>{
    return(
        <div className="flex ">
          <div className="w-1/3 p-10">
            
            <img
            alt="time sheet"
            src={timesheet}
            />
            <div className="my-6 flex py-2 hover:bg-blue-200 hover:outline-none rounded-lg">
                <BiSolidDashboard className='w-6 h-6'/>
                <span className='ml-4'>Dashboard</span>
            </div>
             <div className="my-6 flex py-2 hover:bg-blue-200 hover:outline-none rounded-lg" >
                <FiUsers className='w-6 h-6'/>
                <span className='ml-4'>Employees</span>
            </div> 
            <div className="my-6 flex py-2 hover:bg-blue-200 hover:outline-none rounded-lg">
                <MdTask className='w-6 h-6'/>
                <span className='ml-4'>Tasks</span>
            </div>
            <div className="my-6 flex py-2 hover:bg-blue-200 hover:outline-none rounded-lg">
                <AiFillClockCircle className='w-6 h-6'/>
                <span className='ml-4'>Performance</span>
            </div>
            <div className="my-6 flex py-2 hover:bg-blue-200 hover:outline-none rounded-lg">
                <IoSettingsSharp className='w-6 h-6'/>
                <span className='ml-4'>Settings</span>
            </div>
            <div className="my-6 flex py-2 hover:bg-blue-200 hover:outline-none rounded-lg">
                <BiHelpCircle className='w-6 h-6'/>
               <span className='ml-4'>Help</span> 
            </div>
            <div className="my-8 flex">
                <FiLogOut className='w-6 h-6 text-red-600'/>
               <span className='ml-4 text-red-600'>Logout</span> 
            </div>
            <div className="my-5 flex">
                <img
                className='rounded-md h-48 w-56'
                alt='user'
                src='https://i0.wp.com/cptsdfoundation.org/wp-content/uploads/2021/01/piece-4-emotional-flashbacks-jpg-2.jpeg?resize=240%2C300&ssl=1'
                />
            </div>
          </div>

        <div className='w-10/12'>
            <div className='flex justify-between w-full'>
                <div className=' text-3xl font-bold my-10'>
                    Lorem Ispum Dolar 
                </div>

                <div className="flex items-center">
                <div className="flex flex-col items-end px-5">
                    <div className="font-bold">Rajpillai</div>
                    <div>Chennai, India</div>
                </div>
                <img
                    className='mr-4'
                    alt="user"
                    src="https://content.streamagain.co/uploads/unsplash_NR_705be_N_CU_391eb2bdab.png"
                />
                </div>

            </div>



            <div className='flex'>
              <div>
                <AiOutlineSearch className='mx-5 my-2 absolute h-5  w-8'/>
                <input
                 className='border border-gray-400 rounded-md h-9 px-5 w-[430px] pl-24' 
                 type='text'
                 placeholder='Search by name,position'
                />

               </div>
              <div 
                className='border border-gray-400 rounded-md h-9 w-36 mx-5 flex bg-blue-800 text-white pr-2 justify-center items-center' >
                Filter
                <BsFilter className='ml-2 h-6'/>
               </div>
            </div>


            <div className='font-bold text-blue-600 my-4'>
                Lorem Ipsum
            </div>

                    
     


        <div className="grid grid-cols-2 gap-8">
             <div className="border-2 rounded-lg flex p-1">
                <div>
                   <img
                    className='p-2 rounded-md h-[78px]'
                    alt='kalaivani'
                    src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKuVGh_-kSTkXSHg651xuvdY9DPVNEptQmLw3U5-VN8rYSPqSV'
                   />
                </div> 
                

                
                <div className="flex flex-col ml-4">
                     <div className='font-bold'>Kalaivani</div>
                     <div className='text-blue-800'>Studio Lead</div>
                     <div className='text-gray-500'>Employee Code</div>
                </div>


                <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>

            <div className=" border-2 rounded-lg flex p-1 mr-4">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Mahalingam'
                        src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9SoEAgvLJnsz7NblFZ0KEqI0TDWg04JiNvcVgMCpaH0nPayzf'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Mahalingam</div>
                     <div className='text-blue-800'> Senior Architect</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>

            <div className=" border-2 rounded-lg flex p-1">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Simeon Samuel'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34P0K0Vyllf5FLKcfddScwzjV-LVcntMgRaimJZMKP8wJpNBA'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Simeon Samuel</div>
                     <div className='text-blue-800'>Junior Architect</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>

            <div className=" border-2 rounded-lg flex p-1 mr-4">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Preethy'
                        src='https://t2.gstatic.com/images?q=tbn:ANd9GcRfPgzjGuQRb-LCpd_ahuSoEGBS73ThWF22ugWnuAoO-HIQyT7i'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Preethy</div>
                     <div className='text-blue-800'> Senior Architect</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>


            <div className=" border-2 rounded-lg flex p-1">
                <div>
                     <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Visu varshini'
                        src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUxK71hceBys95JVYD1NOpLsNlaepBO-KtHsSEPgsVTPMRX7J6'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-1">
                     <div className='font-bold'>Visu varshini</div>
                     <div className='text-blue-800'>Junior Architect</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>
            
            <div className=" border-2 rounded-lg flex p-1 mr-4">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Hussian M'
                        src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrPinkBlMuW1pLc6CSZTsRSXznBkCehpTPmI58NUrug7hR6Dvs'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Hussian M</div>
                     <div className='text-blue-800'> 3D visualizer</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>


            <div className=" border-2 rounded-lg flex p-1">
            <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Kiruthika'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkvGWxRNwE4B8SEV1t4KaTIYWlgcWezwsbmHlh-tp-EYCs3P9'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Kiruthika</div>
                     <div className='text-blue-800'>Junior Architect</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>
            

            <div className=" border-2 rounded-lg flex p-1 mr-4">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Vishal Papu'
                        src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXV0Vm2vpXtMYPUlYnU-kvLbyWAuFRNrLI58rvDSK7wx5lK9jr'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Vishal Papu</div>
                     <div className='text-blue-800'> Graphic designer</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>


            <div className=" border-2 rounded-lg flex p-1">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Venkatachalam'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgp-TK7-MqIDhvCvT8pXMyYCuCj99Ufzohs1BhhAYCtgIkSEj_'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Venkatachalam</div>
                     <div className='text-blue-800'> Junior Developer</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>


            <div className=" border-2 rounded-lg flex p-1 mr-4">
                 <div>
                    <img
                        className='p-2 rounded-md h-[78px]'
                        alt='Kharunya'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxRQExJ9jDq0o-fAf-tGMZAxR0pXtv6cWZpSZJYUS4GuxA8gJ'
                    /> 
                  </div> 

                   <div className="flex flex-col ml-4">
                     <div className='font-bold'>Kharunya</div>
                     <div className='text-blue-800'> Digital marketing</div>
                     <div className='text-gray-500'>Employee Code</div>
                   </div>


                   <div className="ml-auto flex flex-col justify-between items-end mr-4 h-16">
                    <div>
                        <div className="text-green-500">12/02/22</div>
                    </div>
                    <div>
                        <BiMessageRoundedDots />
                    </div>
                </div>
            </div>


        </div>








           





        </div>


        

    
        
            
        </div>
    )
}

export default Profile;