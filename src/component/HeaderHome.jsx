import React, { useContext } from 'react'
import HalfColumn from './HalfColumn'
import Primarybttn from './Primarybttn'
import Roundbox from './Roundbox'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Maincontxt } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const HeaderHome = () => {
      const {state, setSelectedState, city, setSelectedCity, searchHandlerParams, selectedCity, selectedState} = useContext(Maincontxt)
      
   
  return (
    <>
    <div className='coloebx bluebg absolute w-full h-[80vh] left-0 top-[46px] '></div>
    <div className='banwrp wrap'>
        <div className='flex justify-between items-center mb-[-40px]'>
            <HalfColumn>
                <p className='toptxt'>Skip the travel! Find Online</p>
<h1 className='bantxt'>Medical <span>Centers</span></h1>
<p className="banp">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
<Button variant="contained" sx={{backgroundColor:'var(--primaryColor)', fontSize:'16px', textTransform:'capitalize', fontWeight:300}} >Find Center</Button>

            </HalfColumn>
             <HalfColumn>
                <img src='NicePng_doctor-png_336282 1.png' alt='banner' />
             </HalfColumn>
        </div>


        <Roundbox bgcolor='#fff'>
            <div className='serchpart'>
                <div id="state">
                 <Autocomplete
                
      disablePortal
      options={state}
      sx={{ width: 300 }}
            // 2. Control the value
      value={selectedState} 
      // 3. Update the value on change
      onChange={(event, newValue) => {
        setSelectedState(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Select State" />}
    />
    </div>
    <div id="city">
     <Autocomplete
       disabled={!city} 
      disablePortal
      options={city}
      sx={{ width: 300 }}
       value={selectedCity}
      onChange={(event, newValue) => { 
        setSelectedCity(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Select City" />}
    />
    </div>
    <Button type="submit"  id="searchBtn" variant="contained" onClick={searchHandlerParams} sx={{backgroundColor:'var(--primaryColor)', fontSize:'16px', width:'200px', textTransform:'capitalize', fontWeight:300}} >
      Search
    </Button>

            </div>
            <p>You may be looking for</p>
            <div className='iconpart grid grid-cols-5 justify-between '>
                <Roundbox>
                    <img src='Doctor.svg' />
                    <p>Doctors</p>
                </Roundbox>
                <Roundbox>
                    <img src='Drugstore.svg' />
                    <p>Doctors</p>
                </Roundbox>
                <Roundbox>
                    <img src='Hospital.svg' />
                    <p>Doctors</p>
                </Roundbox>
                <Roundbox>
                    <img src='Capsule.svg' />
                    <p>Doctors</p>
                </Roundbox>
                <Roundbox>
                    <img src='Ambulance.svg' />
                    <p>Doctors</p>
                </Roundbox>
            </div>
        </Roundbox>
    </div>
    </>
    
  )
}

export default HeaderHome