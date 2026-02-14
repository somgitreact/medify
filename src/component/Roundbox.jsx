import { style } from '@mui/system'
import React from 'react'

const Roundbox = ({children, bgcolor, width, hight, padding, margin}) => {
  return (
    <div className={`roundcomp rounded-md flex-col ${padding} ${margin}` } style={ {backgroundColor:bgcolor || '#fff', width:width, height:hight}}>
       {children}
    </div>
  )
}

export default Roundbox