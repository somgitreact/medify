import React from 'react'
import Roundbox from './Roundbox'
import Primarybttn from './Primarybttn'

const FindSpalize = () => {
  return (
    <div className='bluebg'>
        <div className='wrap'>
        <h2>Find by specialisation</h2>
    <div className='innro'>
        <Roundbox bgcolor='#fff'>
            <img src='Drugstore.svg' />
            <p>Dentistry</p>
        </Roundbox>
    </div>
    <Primarybttn>View all</Primarybttn>
    </div>
    </div>
  )
}

export default FindSpalize