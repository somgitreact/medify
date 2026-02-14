import React, { createContext, useContext, useEffect, useState } from 'react'
import { FetchData } from '../utilsApi/Alapi';
import { useNavigate } from 'react-router-dom';


export const Maincontxt = createContext();

export const Context = ({children}) => {
     const [state, setState]= useState([])
     const [selectedState, setSelectedState]= useState('')
     const [city, setCity]= useState([])
     const [selectedCity, setSelectedCity]= useState('')
     const [listData, setListData]= useState([])
     const navigate = useNavigate()
     useEffect(()=>{
        const getdata = async ()=>{
            const data = await FetchData('states')
           // console.log("context datafroem)))))))))", data);
            
            setState(data)
            localStorage.setItem("bookings", localStorage.getItem("bookings") || [])
        }
        getdata()
     },[])
     useEffect(()=>{
      setCity([])
        const getCitydata = async ()=>{
            const data = await FetchData(`cities/${selectedState}`)
            //console.log("context datafroem)))))))))", data);
            
            setCity(data)
        }
        getCitydata()
     },[selectedState])
//console.log("+++++++++", selectedState);

const searchHandler = async ()=>{
      const HospitalData = await FetchData(`data?state=${selectedState}&city=${selectedCity}`)
      console.log("context datafroem)))))))))", HospitalData);
      setListData(HospitalData)
}

const searchHandlerParams = async ()=>{
      const HospitalData = await FetchData(`data?state=${selectedState}&city=${selectedCity}`)
      console.log("context datafroem)))))))))", HospitalData);
      setListData(HospitalData)
      navigate(`/list/${listData}`)

}
  return (
    <Maincontxt.Provider value={{state, setSelectedState, city,searchHandlerParams, setSelectedCity, searchHandler, listData, selectedCity, selectedState}}>
      {children}
    </Maincontxt.Provider>
  )
}

