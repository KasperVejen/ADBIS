const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const componentData = require("./routers/componentdata");

const app = express();

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(
  "/adbis",
  express.static(path.join(__dirname, "../frontend/public"), {
    extensions: ["html"],
  })
);
app.use("/adbis/api", componentData);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
