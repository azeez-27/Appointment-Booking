import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import "./index.css";
import CreateTimeSlot from "./components/CreateTimeSlot";
import AvailableTimeSlots from "./components/AvailableTimeSlots";
import BookAppointment from "./components/BookAppointment";
import ViewAppointments from "./components/ViewAppointments"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ViewAppointments/>} />
        <Route path="/create-time-slot" element={<CreateTimeSlot/>} />
        <Route path="/available-time-slots" element={<AvailableTimeSlots/>}/>
        <Route path="/book-appointment" element={<BookAppointment/>}/>
      </Routes>
    </>
  )
}

export default App;
