import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("bookings")) || [];
      setBookings(data);
    } catch {
      setBookings([]);
    }
    setReady(true);
  }, []);

  if (!ready) return <div>Loading...</div>;

  return (
    <div>
      {/* Cypress looks for this */}
      <h1>My Bookings</h1>

      {bookings.map((item, index) => (
        <div key={index}>
          {/* Cypress looks for this */}
          <h3>{item["Hospital Name"]}</h3>

          <p>{item.City}</p>
          <p>{item.State}</p>
          <p>{item.date}</p>
          <p>{item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
