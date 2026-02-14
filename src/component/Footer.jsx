import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='wrap '>
         <div className='foottop'>
         <div className='linkinfo'>
            <Link to="/"><img src='logo.png' alt='medify' /></Link>
            <ul className='social'>
                <li><NavLink to='/cc'><img src='fb.svg' alt='fb' /></NavLink></li>
                <li><NavLink to='/cc'><img src='tw.svg' alt='tw' /></NavLink></li>
                <li><NavLink to='/cc'><img src='yt.svg' alt='yt' /></NavLink></li>
                <li><NavLink to='/cc'><img src='pin.svg' alt='pin' /></NavLink></li>
            </ul>
         </div>
         <div className='siteinfo'>
             <ul>
<li><NavLink to='/cc'>Quick Links</NavLink></li>
<li><NavLink to='/cc'>About Us</NavLink></li>
<li><NavLink to='/cc'>Our Pricing</NavLink></li>
<li><NavLink to='/cc'>Our Gallery</NavLink></li>
<li><NavLink to='/cc'>Appointment</NavLink></li>
<li><NavLink to='/cc'>Privacy Policy</NavLink></li>
                
             </ul>
                          <ul>
<li><NavLink to='/cc'>Department</NavLink></li>
<li><NavLink to='/cc'>Orthology</NavLink></li>
<li><NavLink to='/cc'>Neurology</NavLink></li>
<li><NavLink to='/cc'>Dental Care</NavLink></li>
<li><NavLink to='/cc'>Opthalmology</NavLink></li>
<li><NavLink to='/cc'>Cardiology</NavLink></li>
                
             </ul>
                          <ul>
 <li><NavLink to='/cc'>Useful Links </NavLink></li>
 <li><NavLink to='/cc'>About Us </NavLink></li>
 <li><NavLink to='/cc'>Our Pricing </NavLink></li>
 <li><NavLink to='/cc'>Our Gallery </NavLink></li>
 <li><NavLink to='/cc'>Appointment </NavLink></li>
 <li><NavLink to='/cc'>Privacy Policy </NavLink></li>
              
             </ul>
         </div>
         </div>
        <div className='footbottom'>
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
         </div>
        </div>
    </div>
  )
}

export default Footer