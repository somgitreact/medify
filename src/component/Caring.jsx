import React from 'react'
import HalfColumn from './HalfColumn'

const Caring = () => {
  return (
    <div className='bluebg'>
        <div className='wrap'>
            <div className='flex justify-between items-center py-[70px]'>
                <HalfColumn>
                    <img src="Group 1000011062.png" alt='Group 1000011062'  />
                </HalfColumn>
                 <HalfColumn>
                    <p className='toptxtinner'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
<h2 className='titlenopad'>Patient Caring</h2>
<p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare. </p>
<ul>
    <li>Stay Updated About Your Health</li>
    <li>Check Your Results Online</li>
    <li>Manage Your Appointments</li>
</ul>



                 </HalfColumn>
            </div>
        </div>
    </div>
  )
}

export default Caring