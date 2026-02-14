import React from 'react'
import { Link, NavLink  } from 'react-router-dom'

const Navmenu = () => {
  return (

 <>  
 <div className='topbar'>
    <div className='wrap'> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</div>
 </div>

 <div className='wrap flex justify-between py-[15px]! navlist'> 
    <Link to="/"><img src='logo.png' alt='medify' /></Link>
 <div className='navmenu flex justify-between gap-[5px] items-center'>
        <NavLink  to='/'>Find Doctors</NavLink >
<NavLink  to='/'>Hospitals</NavLink >
<NavLink  to='/'>Medicines</NavLink >
<NavLink  to='/'>Surgeries</NavLink >
<NavLink  to='/'>Software for Provider</NavLink >
<NavLink  to='/'>Facilities</NavLink >
 <NavLink  to='/booking' className='booking'>My Bookings</NavLink >
         {/* <Link to='/'>Home</Link>
       <Link to='/list'>List of Hospital</Link>
        <Link to='/booking'>Bookings</Link> */}
    </div>
    </div>
    </> 
  )
}

export default Navmenu