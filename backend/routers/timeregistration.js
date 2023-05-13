//Imports
const express = require("express");
const router = express.Router();
const Timeregistration = require("../classes/registration");

//Routes
router.get("/timeregistration", async (req, res) => {
  try {
    const sql = "SELECT * FROM timeregistration";
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.execute(sql);
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

router.post("/timeregistration", async (req, res) => {
  const { user, date, hours, pause, project } = req.body;
  const timeregistration = new Timeregistration(
    user,
    date,
    hours,
    pause,
    project
  );
  if (await timeregistration.save()) {
    res.json({ message: "Timeregistration saved" });
  } else {
    res.status(500).json({ error: "Timeregistration not saved" });
  }
});

//Export
module.exports = router;
