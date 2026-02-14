import React, { createContext, useEffect, useState } from 'react'
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

  // ✅ Load States
  useEffect(()=>{
    const getdata = async ()=>{
      const data = await FetchData('states')
      setState(data || [])
    }
    getdata()

    // ✅ Proper localStorage init
    if(!localStorage.getItem("bookings")){
      localStorage.setItem("bookings", JSON.stringify([]))
    }

  },[])

  // ✅ Load Cities
  useEffect(()=>{
    if(!selectedState) return;

    const getCitydata = async ()=>{
      const data = await FetchData(`cities/${selectedState}`)
      setCity(data || [])
    }
    getCitydata()

  },[selectedState])

  // ✅ SEARCH (Matches Cypress API)
  const searchHandler = async ()=>{
    if(!selectedState || !selectedCity) return;

    const HospitalData =
      await FetchData(`data?state=${selectedState}&city=${selectedCity}`)

    setListData(HospitalData || [])

    // Cypress expects navigation to /list
    navigate('/list')
  }

  return (
    <Maincontxt.Provider value={{
      state,
      city,
      selectedState,
      selectedCity,
      setSelectedState,
      setSelectedCity,
      searchHandler,
      listData
    }}>
      {children}
    </Maincontxt.Provider>
  )
}
