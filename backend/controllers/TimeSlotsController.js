const TimeSlotsModel = require("../models/TimeSlotsModel");

//create new time slot

const createTimeSlot = (req, res) => {
  console.log("Inside create Function");
  const slot = new TimeSlotsModel({
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    isBooked: req.body.isBooked,
  });
  slot
    .save()
    .then((response) => {
      res.json({ message: "Time Slot Created Successfully", flag: true });
    })
    .catch((err) => {
      res.json({ message: "Error", flag: false });
    });
};

//fetch all available time slots
const showTimeSlots = (req, res) => {
  const { isBooked } = req.query;
  
  TimeSlotsModel.find({ isBooked: isBooked })
    .then((response) => {
      res.json({ response, message: "Slots fetched" });
    })
    .catch((err) => {
      res.json({ message: "An Error has occured" });
    });
};

module.exports = {
  showTimeSlots,
  createTimeSlot,
};
