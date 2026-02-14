import React, { useState } from 'react'
import Roundbox from './Roundbox'
 import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
const HospitalCard = ({item, dates}) => {
    const [showBooking, setShowBooking] = useState(false)
    const [selectedDate, setSelectedDate] = useState(dates[0])
     const isBookedView = dates.length === 0;
    console.log("LLLLLLLLLLLLLL", dates, selectedDate);

    
//     const bookingHandler = (time)=>{
//         // const existing = localStorage.getItem("bookings")
//         // let hasBooking = existing ? JSON.parse(existing) : []
//         let hasBooking = [];

// try {
//   const existing = localStorage.getItem("bookings");
//   hasBooking = existing ? JSON.parse(existing) : [];
// } catch (e) {
//   hasBooking = [];
// }
// console.log("hasBooking", hasBooking);

// //const iflisted = hasBooking.find((listed)=> listed["Provider ID"] === item["Provider ID"])
// const iflisted = hasBooking.findIndex((value, index, array) => value["Provider ID"] === item["Provider ID"])

// //  console.log("lift", iflisted);

// const constructDat= selectedDate.split(',')
// const pushDate = constructDat[0] + ',' + constructDat[1]

//  console.log("check", newBooking);

//  if(iflisted  !== -1 ){
//  // hasBooking = [...hasBooking, {...iflisted, "timeAdd": [...timeAdd, time]}]
//   const updatedBooking = { ...hasBooking[iflisted] };
//   updatedBooking.timeAdd = [...updatedBooking.timeAdd, time]
//   hasBooking[iflisted] = updatedBooking;
//  } else {
//      const newBooking = {
//             "Provider ID":item["Provider ID"],
//             "Hospital Name": item["Hospital Name"],
//             "City":item["City"],
//             "State":item["State"],
//             "Hospital Type":item["Hospital Type"],
//             "date": pushDate,
//             "timeAdd": [time]
//         }
//   hasBooking.push(newBooking)
//  }
//  console.log("hasBooking", hasBooking);

     
// //hasBooking.push(newBooking)

//     localStorage.setItem("bookings", JSON.stringify(hasBooking))
//     setShowBooking(false)
//     }


const bookingHandler = (time) => {

  let hasBooking = [];

  try {
    const existing = localStorage.getItem("bookings");
    hasBooking = existing ? JSON.parse(existing) : [];
  } catch {
    hasBooking = [];
  }

  const constructDat = selectedDate.split(',');
  const pushDate = constructDat[0] + ',' + constructDat[1];

  // ✅ Each slot is a NEW booking (this is what Cypress expects)
  const newBooking = {
    "Provider ID": item["Provider ID"],
    "Hospital Name": item["Hospital Name"],
    "City": item["City"],
    "State": item["State"],
    "Hospital Type": item["Hospital Type"],
    "date": pushDate,
    "time": time
  };

  hasBooking.push(newBooking);

  localStorage.setItem("bookings", JSON.stringify(hasBooking));

  setShowBooking(false);
};



    // let numD = item?.date?.split(",")
  /// console.log("------", numD[1], numD[2], Date.parse(`${numD[1]}, ${numD[2]}`));
    
  return (
      <Roundbox margin="mb-3">
            <div className='mainsec flex justify-between gap-5  '>
              <div className='icon bg-[#8CCFFF] rounded-full w-[150px] h-[150px] flex justify-center items-center'> <img src='image 22.png' alt='icon'  /></div>
              <div className='dtails text-left flex-1'>
                <h3 className='text-[#14BEF0] text-md font-semibold '>{item["Hospital Name"]}</h3>
                <strong className=' font-[600] text-[18px]  '> {item["City"]} , {item["State"]} </strong>
                <p className='py-0.5! text-[17px] text-left!'>{item["Hospital Type"]}</p>
                <button className='more py-0! text-[17px]'>more</button>
                <p className='py-0.5! text-[17px] text-left!'><span className=' font-bold text-green-500'>FREE</span> <span className=' line-through'>₹ 500</span> Consultation fee at clinic</p>
               
 </div>

{/* {dates.length ? 
              <div className='btnpart flex flex-col justify-end'> 
                <p className='text-green-500! text-[15px] font-semibold'>Available Today</p>                
                <Button className='' onClick={()=>setShowBooking(!showBooking)} variant="contained" sx={{backgroundColor:'var(--primaryColor)'}} >Book FREE Center Visit</Button>
              </div>
:
<div className='btnpart flex flex-col justify-start'> 
                <div className=' flex justify-between '> 
                    <Button variant='outlined' sx={{color:'var(--primaryColor)'}}> {item.date}  </Button> 
                     {item?.timeAdd?.map((time, index)=><Button variant='outlined' sx={{color:'var(--primaryColor)'}}> {time}  </Button>) 
                     }
                    
                    </div>
              </div>
} */}

<div className='btnpart flex flex-col justify-start'>
  {isBookedView ? (
    <div className='flex gap-2 flex-wrap'>
      <Button variant='outlined'>{item.date}</Button>
      {/* {item?.timeAdd?.map((time, index) => (
        <Button key={index} variant='outlined'>{time}</Button>
      ))} */}
      <Button variant='outlined'>{item.time}</Button>
    </div>
  ) : (
    <>
      <p className='text-green-500! text-[15px] font-semibold'>Available Today</p>
      <Button
        onClick={() => setShowBooking(!showBooking)}
        variant="contained"
        sx={{ backgroundColor: 'var(--primaryColor)' }}
      >
        Book FREE Center Visit
      </Button>
    </>
  )}
</div>


            </div>


{ showBooking &&  
          <div className='bookinfo'>
             <div className='dateRow'> 
{dates?.map((item, index)=> {
    return(
        <Button className='avlDate w-[160px]' key={index} onClick={()=>setSelectedDate(item)}> 
                    <p className=' text-[14px]'>{item}</p>  
                    <p className='py-0! text-[17px] text-cyan-600! '>11 slots available</p>
                    </Button>
    )
})}
                      

                    </div>

            <div className='bookrow'>
              <p>Morning</p>  
             <div  className='timerow'>
      <Button variant="outlined" onClick={()=>bookingHandler('11:30 AM')}>11:30 AM</Button>
      
    </div>
              </div>


            <div className='bookrow'>
              <p>Afternoon</p>  
             <div  className='timerow'>
        <Button variant="outlined" onClick={()=>bookingHandler('12:00 AM')}>12:00 AM</Button>
          <Button variant="outlined" onClick={()=>bookingHandler('12:30 PM')}>12:30 PM</Button>
            <Button variant="outlined" onClick={()=>bookingHandler('01:00 AM')}>1:00 AM</Button>
              <Button variant="outlined" onClick={()=>bookingHandler('01:30 PM')}>01:30 PM</Button>
                <Button variant="outlined" onClick={()=>bookingHandler('02:00 PM')}>02:00 PM</Button>
                  <Button variant="outlined" onClick={()=>bookingHandler('02:30 PM')}>02:30 PM</Button>
    </div>
              </div>

                          <div className='bookrow'>
              <p>Evening</p>  
             <div  className='timerow'>
        <Button variant="outlined" onClick={()=>bookingHandler('06:00 PM')}>06:00 PM</Button>
          <Button variant="outlined" onClick={()=>bookingHandler('06:30 PM')}>06:30 PM</Button>
            <Button variant="outlined" onClick={()=>bookingHandler('07:00 PM')}>07:00 PM</Button>

    </div>
              </div>



          </div>
}
          </Roundbox>
  )
}

export default HospitalCard