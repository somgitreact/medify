import React, { useContext } from 'react'
import Roundbox from './Roundbox'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Primarybttn from './Primarybttn'
import Button from '@mui/material/Button';
import { Maincontxt } from '../context/Context';

const Header = () => {
   const {state, setSelectedState, city, setSelectedCity, searchHandler} = useContext(Maincontxt)
   
   
  return (
    <>
     <div className='innerhdrbx absolute w-full h-[137px] left-0 top-35px  bg-linear-to-t from-[#2AA7FF] to-[#0C8CE5] rounded-b-[20px]'></div>
     <div className='wrap innerdeader'>
     <Roundbox>
      <div className='searchbarinner'>
                     {/* <Autocomplete
      disablePortal
      options={{}}
       size="small"
  sx={{
    width: 300,
    "& .MuiOutlinedInput-root": {
      paddingTop: "2px",
      paddingBottom: "2px",
      minHeight: "36px",   // control height
    },
    "& .MuiInputBase-input": {
      padding: "6px 8px",  // inner text spacing
    }
  }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    /> */}
    <Autocomplete
    id="state"
      disablePortal
      options={state}
      sx={{ width: 300 }}
            // 2. Control the value
      //value={value} 
      // 3. Update the value on change
      onChange={(event, newValue) => {
        setSelectedState(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Select State" />}
    />
     <Autocomplete
     id="city"
      disabled={!city} 
      disablePortal
      options={city}
      sx={{ width: 300 }}
      onChange={(event, newValue) => {
        setSelectedCity(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Select City" />}
    />
    <Button type="submit"  id="searchBtn" variant="contained" onClick={searchHandler} sx={{backgroundColor:'var(--primaryColor)', fontSize:'16px', width:'200px', textTransform:'capitalize', fontWeight:300}} >
      Search
    </Button>
    
      </div>
     </Roundbox>
     </div>
     </>
  )
}

export default Header