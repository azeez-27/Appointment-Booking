import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    onSubmit: (values) => {
      values = {
        ...values,
        slotId: id,
      };
      bookAppointment(values);
    },
  });
  const bookAppointment = async (values) => {
    const response = await axios.post(
      "http://localhost:3000/api/appointments",
      values
    );
    if (response.data.flag) {
      alert(response.data.message);
      navigate("/");
    }
  };

  return (
    <div className="box-container center">
      <h1>Book Time Slot</h1>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div>
          <h3>Name:</h3>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div>
          <h3>Email:</h3>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
