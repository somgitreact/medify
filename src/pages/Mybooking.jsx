import React, { useEffect, useState } from 'react'
import HospitalCard from '../component/HospitalCard'

const Mybooking = () => {
  const [bookList, setBookList] = useState([])
  const [ready, setReady] = useState(false);
  const isBookedView = dates.length === 0;

  
  // useEffect(()=>{
  //   const storage = JSON.parse(localStorage.getItem("bookings"))
  
  // setBookList(storage)
  // },[])
//   useEffect(() => {
//   const storage = localStorage.getItem("bookings");

//   // ensure always an array
//   const parsed = storage ? JSON.parse(storage) : [];

//   setBookList(parsed);
// }, []);
useEffect(() => {
  const storage = localStorage.getItem("bookings");
  const parsed = storage ? JSON.parse(storage) : [];

  setBookList(parsed);
  setReady(true);   // tell UI data is ready
}, [])
  //console.log("DDDD",bookList);
    if (!ready) return <div>Loading...</div>;
  return (
     <div className=''>
      {/* <Header /> */}
      <div className='wrap'>


<div className='flex-wrap flex justify-between'>
  <h1>My Bookings</h1>
               <div className='listofhospital  w-[100%] md:w-[70%]  '>

                { bookList?.length === 0 ?
                  <h3>No Bookings Found!</h3>
                :
                bookList?.map((item)=> <HospitalCard key={item["Provider ID"]} item={item} dates={[]} />)}

        
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

export default Mybooking 