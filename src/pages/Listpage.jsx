import React, { useContext, useState } from 'react'
import Header from '../component/Header'
import { Maincontxt } from '../context/Context'
import HospitalCard from '../component/HospitalCard'

import { GenerateDate } from '../utilsApi/GenerateDate'


const Listpage = () => {
  //const {listData, selectedCity} = useContext(Maincontxt)
  const { listData = [], selectedCity = "" } = useContext(Maincontxt) || {};
  const [dates, setDates] = useState([])

  console.log(params);
   const datbook = new Date()
    console.log("date=========",datbook );
 //const {"Provider ID", "Hospital Name", City  State, Hospital Type, }
// useState(()=>{
//   const dateall = async ()=>{
//     const datArr = await GenerateDate();
//      setDates(datArr)
//   }
//   dateall()
// },[])
useEffect(() => {
  const dateall = async () => {
    const datArr = await GenerateDate();
    setDates(datArr || []);
  };

  dateall();
}, []);

if (!listData.length) {
  return <div className="wrap"><h1>Loading...</h1></div>;
}

  return (
    <div className=''>
      <Header />
      <div className='wrap'>
      <div className=''>
        <h1 className='innertitle'>{listData.length} medical centers available in {selectedCity}</h1>
         <p>Book appointments with minimum wait-time & verified doctor details</p>

      </div>

<div className='flex-wrap flex justify-between'>
               <div className='listofhospital  w-[100%] md:w-[70%]  '>

                 {listData?.map((item)=> <HospitalCard key={item["Provider ID"]} item={item} dates={dates}/>)}

        
         </div>
<div class="bg-gray-200 rounded-2xl shadow-md p-8 w-[100%] md:w-[28%]">
    
    <p class="text-gray-700 text-lg mb-3">
      This World Oral Health Day,
    </p>


    <h3 class="text-[20px] font-semibold leading-snug text-blue-900">
      Get a <span class="text-sky-500 font-bold">FREE</span> Appointment*
      <br />
      with Top Dentists.
    </h3>

    <div class="mt-5">
      <span class="bg-sky-500 text-white text-sm tracking-wider px-4 py-1 rounded">
        LIMITED PERIOD OFFER
      </span>
    </div>


    <p class="mt-6 text-sky-600 text-lg font-medium">
      #BeSensitiveToOralHealth
    </p>


    <p class="mt-3 text-xs text-gray-600">
      *T&C Apply - only consultation fee. Procedures / surgeries not covered
    </p>

  </div>

  </div>
      </div>

    </div>
  )
}

export default Listpage