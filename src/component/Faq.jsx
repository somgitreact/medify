import React from 'react'
import HalfColumn from './HalfColumn'
import FaqCompo from './FaqCompo'

const Faq = () => {
  return (
    <div className='wrap'>
        <div className='flex justify-between items-center mb-[-40px] flex-wrap'>
            <HalfColumn>
                <img src="Image-21-1.png.png" alt='Group 1000011062'  />
            </HalfColumn>
            <HalfColumn>
                <FaqCompo title="dfdfdfdf"  ans="fgfgfg gfgfgffgfgfg"  />
            </HalfColumn>
        </div>
        
    </div>
  )
}

export default Faq