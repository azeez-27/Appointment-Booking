import axios from "axios";
import { isString } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AvailableTimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (() => {
      axios
        .get("http://localhost:3000/api/slots", {
          params: {
            isBooked: false,
          },
        })
        .then((res) => setTimeSlots(res.data.response));
    })();
  }, []);

  function handleClick(val) {
    if (typeof val === "string") {
      navigate("/book-appointment", { state: val });
    } else {
      navigate("/create-time-slot");
    }
  }

  return (
    <div className="box-container center">
      <h1>Available Time Slots</h1>
      {timeSlots?.map((val) => (
        <div className="container box" key={val._id}>
          <h3>
            {new Date(val.startTime).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            - {new Date(val.endTime).toLocaleTimeString()}
          </h3>
          <button onClick={() => handleClick(val._id)}>Book</button>
        </div>
      ))}
      <button onClick={handleClick}>Create Another Slot</button>
    </div>
  );
};

export default AvailableTimeSlots;
