//router to projects

//imports
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../data/configDB");
const createTimestamp = require("../../utilities/timestamp");
const Project = require("../classes/project");

//middleware
router.use(bodyParser.json());

//db.testConnection();
db.testConnection();

//routes
router.post("/project", async (req, res) => {
  let { name, description, customer_name, customer_cvr } = req.body;
  const project = new Project(
    name,
    description,
    customer_name,
    customer_cvr,
    createTimestamp()
  );
  if (await project.save()) {
    res.json({ message: "Project saved" });
  } else {
    res.status(500).json({ error: "Project not saved" });
  }
});

//export
module.exports = router;
