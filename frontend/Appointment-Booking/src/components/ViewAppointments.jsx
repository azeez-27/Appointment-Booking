import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/appointments"
      );
      setAppointments(response.data.response);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      // Handle the error
    }
  };

  const fetchBookedSlots = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/slots", {
        params: {
          isBooked: true,
        },
      });
      setSlots(response?.data.response);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      // Handle the error
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchBookedSlots();
  }, []);

  function handleClick() {
    navigate("/create-time-slot");
  }

  function getData() {
    return appointments?.map((val) => {
      return slots?.map((obj) => {
        if (obj._id === val.slotId) {
          return (
            <div key={obj._id} className="box">
              <div className="userInfo">
                <h2>{val.userDetails.name}</h2>
                <h3>{val.userDetails.email}</h3>
              </div>

              <div className="timeInfo">
                <h3>
                  Slot:{" "}
                  {new Date(obj.startTime).toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  - {new Date(obj.endTime).toLocaleTimeString()}
                </h3>
              </div>
            </div>
          );
        }
      });
    });
  }

  return (
    <div className="box-container center">
      <h1>Booked Appointments</h1>
      {appointments.length !== 0 ? getData() : <p>No Appointments Found</p>}
      <button onClick={handleClick}>Book New Appointment</button>
    </div>
  );
};
export default ViewAppointments;
