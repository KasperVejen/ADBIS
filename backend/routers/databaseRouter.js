//router to get database things

//Imports
const express = require("express");
const router = express.Router();
const db = require("../../data/configDB");

db.testConnection();

//Routes
//get all projects name
router.get("/", async (req, res) => {
  try {
    const sql = "SELECT project_ID, project_name FROM projects";
    const connection = await db.pool.getConnection();
    const [rows, fields] = await connection.execute(sql);
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

//Export
module.exports = router;
