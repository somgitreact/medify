import React, { useEffect, useState } from "react";

const MyBookings = () => {
 const [bookings, setBookings] = useState([])

useEffect(()=>{
  const stored = JSON.parse(localStorage.getItem("bookings") || "[]")
  setBookings(stored)
},[])


  if (!ready) return <div>Loading...</div>;

  return (
    <div className="wrap">
    <h1>My Bookings</h1>

    {bookings.length === 0 ? (
      <p>No bookings found</p>
    ) : (
      bookings.map((item,index)=>(
        <div key={index}>
          <h3>{item["Hospital Name"]}</h3>
          <p>{item.City} , {item.State}</p>
        </div>
      ))
    )}
  </div>
  );
};

export default MyBookings;
