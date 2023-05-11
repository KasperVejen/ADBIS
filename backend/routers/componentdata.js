const express = require("express");
const router = express.Router();
const componentData = require("../../data/components.json");

router.get("/component-data/:role", (req, res) => {
  const { role } = req.params;
  const userData = componentData[role];
  if (userData) {
    res.json(userData);
  } else {
    res.status(404).json({ error: "Role not found" });
  }
});

module.exports = router;
