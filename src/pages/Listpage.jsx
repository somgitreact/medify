import React, { useContext, useState, useEffect } from 'react'
import Header from '../component/Header'
import { Maincontxt } from '../context/Context'
import HospitalCard from '../component/HospitalCard'
import { useParams } from 'react-router-dom'
import { GenerateDate } from '../utilsApi/GenerateDate'

const Listpage = () => {
  const { listData = [], selectedCity = "" } = useContext(Maincontxt) || {};
  const [dates, setDates] = useState([]);

  const params = useParams(); // fixed

  // ✅ correct lifecycle
  useEffect(() => {
    const dateall = async () => {
      const datArr = await GenerateDate();
      setDates(datArr || []);
    };

    dateall();
  }, []);

  // ✅ prevent crash during Cypress load
  if (!listData.length) {
    return (
      <div className="wrap">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className=''>
      <Header />
      <div className='wrap'>
        <div>
          <h1 className='innertitle'>
            {listData.length} medical centers available in {selectedCity}
          </h1>
          <p>Book appointments with minimum wait-time & verified doctor details</p>
        </div>

        <div className='flex-wrap flex justify-between'>
          <div className='listofhospital w-[100%] md:w-[70%]'>
            {listData.map((item) => (
              <HospitalCard
                key={item["Provider ID"]}
                item={item}
                dates={dates}
              />
            ))}
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-md p-8 w-[100%] md:w-[28%]">
            <p className="text-gray-700 text-lg mb-3">
              This World Oral Health Day,
            </p>

            <h3 className="text-[20px] font-semibold leading-snug text-blue-900">
              Get a <span className="text-sky-500 font-bold">FREE</span> Appointment*
              <br />
              with Top Dentists.
            </h3>

            <p className="mt-3 text-xs text-gray-600">
              *T&C Apply - only consultation fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listpage
