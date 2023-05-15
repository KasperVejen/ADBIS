const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const formData = require("express-form-data");
const componentData = require("./routers/componentdata");
const timeregistration = require("./routers/timeregistration");
const databaseRouter = require("./routers/databaseRouter");
const projectRouter = require("./routers/projectRouter");

const app = express();

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(formData.parse());
app.use(
  "/adbis",
  express.static(path.join(__dirname, "../frontend/public"), {
    extensions: ["html"],
  })
);
//routers
app.use("/adbis/api", componentData);
app.use("/adbis/api/timeregistration", timeregistration);
app.use("/adbis/api/database", databaseRouter);
app.use("/adbis/api/projects", projectRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
