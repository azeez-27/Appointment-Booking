import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import AvailableTimeSlots from "./AvailableTimeSlots";
import { useNavigate } from "react-router-dom";

function CreateTimeSlot() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      startTime: "",
      endTime: "",
      isBooked: false,
    },

    onSubmit: (values) => {
      createSlot(values);
    },
  });

  const createSlot = async (values) => {
    try {
      const startTime = new Date(values.startTime).toISOString();
      const endTime = new Date(values.endTime).toISOString();

      const response = await axios.post("http://localhost:3000/api/slots", {
        startTime: startTime,
        endTime: endTime,
        isBooked: values.isBooked,
      });
      if (response.data.flag) {
        navigate("/available-time-slots");
      }
      // Assuming the server responds with a message
    } catch (error) {
      console.error("Error creating slot:", error);
    }
  };

  return (
    <div className="box-container center">
      <h1>Create Time Slot</h1>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div>
          <h3>Start Time</h3>
          <input
            type="datetime-local"
            name="startTime"
            onChange={formik.handleChange}
            value={formik.values.startTime}
            required
          />
        </div>

        <div>
          <h3>End Time</h3>
          <input
            type="datetime-local"
            name="endTime"
            onChange={formik.handleChange}
            value={formik.values.endTime}
            required
          />
        </div>

        <button type="submit">Create Slot</button>
      </form>
    </div>
  );
}

export default CreateTimeSlot;
