//Imports
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../data/configDB");
const calculateTimeDifference = require("../../utilities/timediff");
const createTimestamp = require("../../utilities/timestamp");
const Timeregistration = require("../classes/registration");

//Middleware
router.use(bodyParser.json());

//Routes
router.get("/timeregistration", async (req, res) => {
  try {
    const sql = "SELECT * FROM time_registration";
    const connection = await db.pool.getConnection();
    const [rows, fields] = await connection.execute(sql);
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

router.post("/timeregistration", async (req, res) => {
  let { user_ID, date, start_time, end_time, pause, project } = req.body;
  let hours = calculateTimeDifference(date, start_time, end_time);
  const timeregistration = new Timeregistration(
    user_ID,
    date,
    hours,
    pause,
    project,
    createTimestamp()
  );
  if (await timeregistration.save()) {
    res.json({ message: "Timeregistration saved" });
  } else {
    res.status(500).json({ error: "Timeregistration not saved" });
  }
});

//Export
module.exports = router;
