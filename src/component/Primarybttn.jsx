import React from 'react'

const Primarybttn = ({children, ptop, pbot, clickHandler}) => {
  return (
    <button className={`primarybtn ${ptop} ${pbot}`} onClick={clickHandler}>
        {children}
    </button>
  )
}

export default Primarybttn