const AppointmentsModel = require("../models/AppointmentsModel");
const TimeSlotsModel = require("../models/TimeSlotsModel");


//book an appointment
const bookAppointment = (req, res) => {
  const book = new AppointmentsModel({
    slotId: req.body.slotId,
    userDetails: {
      name: req.body.name,
      email: req.body.email,
    },
  });

  TimeSlotsModel.findOneAndUpdate(
    { _id: req.body.slotId },
    { $set: { isBooked: true } },
  ).exec()
  
  book
    .save()
    .then((response) => {
      res.json({
        message: "You have booked an appointment Successfully",
        flag: true,
      });
    })
    .catch((err) => {
      res.json({ message: "Error booking an appointment", flag: false });
    });
};

//fetch all appointments
const showAppointments = (req, res) => {
  AppointmentsModel.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ message: "An Error has occured" });
    });
};

module.exports = {
  showAppointments,
  bookAppointment,
};
