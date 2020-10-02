const express = require("express");
const Event = require("../models/eventModel");
const router = express.Router();

router.get("/", (req, res) => {
  Event.find({}, (err, data) => {
    res.json(data);
  });
});
router.get("/:id", (req, res) => {
  Event.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});
router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ 'message': 'deleted'});
});

router.post("/", (req, res) => {
  eventDetails = new Event({
    title: req.body.title,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
  });
  eventDetails.save(() => {
    res.json(eventDetails);
  });
});

router.put('/:id',async (req,res) =>{
    await Event.findByIdAndUpdate(req.params.id, req.body)
    res.json({'message':'updated'})
})
module.exports = router;
