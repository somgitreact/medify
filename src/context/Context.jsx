import React, { createContext, useEffect, useState } from 'react'
import { FetchData } from '../utilsApi/Alapi';
import { useNavigate } from 'react-router-dom';

export const Maincontxt = createContext();

export const Context = ({ children }) => {
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [listData, setListData] = useState([]);

  const navigate = useNavigate();

  // ✅ load states
  useEffect(() => {
    const getdata = async () => {
      const data = await FetchData('states');
      setState(data || []);
    };

    getdata();

    // ✅ correct localStorage init
    if (!localStorage.getItem("bookings")) {
      localStorage.setItem("bookings", JSON.stringify([]));
    }
  }, []);

  // ✅ load cities only when state selected
  useEffect(() => {
    if (!selectedState) return;

    const getCitydata = async () => {
      const data = await FetchData(`cities/${selectedState}`);
      setCity(data || []);
    };

    getCitydata();
  }, [selectedState]);

  // ✅ auto fetch hospitals (THIS is what Cypress expects)
  useEffect(() => {
    if (!selectedState || !selectedCity) return;

    const fetchHospitals = async () => {
      const HospitalData = await FetchData(
        `data?state=${selectedState}&city=${selectedCity}`
      );

      setListData(HospitalData || []);
    };

    fetchHospitals();
  }, [selectedState, selectedCity]);

  // navigation only
  const searchHandlerParams = () => {
    navigate('/list');
  };

  return (
    <Maincontxt.Provider
      value={{
        state,
        setSelectedState,
        city,
        setSelectedCity,
        listData,
        selectedCity,
        selectedState,
        searchHandlerParams
      }}
    >
      {children}
    </Maincontxt.Provider>
  );
};
