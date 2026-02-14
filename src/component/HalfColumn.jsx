import React from 'react'

const HalfColumn = ({children}) => {
  return (
    <div className='childbx w-full md:w-[48%]'>
        {children}
    </div>
  )
}

export default HalfColumn