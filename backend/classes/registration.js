//Database connection
const { pool, testConnection } = require("../../data/configDB");

//Class for Timeregistration
class Timeregistration {
  constructor(user_ID, date, hours, pause, project, timestamp) {
    this.user_ID = user_ID;
    this.date = date;
    this.hours = hours;
    this.pause = pause;
    this.project = project;
    this.timestamp = timestamp;
  }

  //save to database
  async save() {
    testConnection();
    try {
      const sql =
        "INSERT INTO time_registration (user_ID, date, hours_in_min, pause, project, timestamp) VALUES (?, ?, ?, ?, ?, ?)";
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sql, [
        this.user_ID,
        this.date,
        this.hours,
        this.pause,
        this.project,
        this.timestamp,
      ]);
      connection.release();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

//Export the class
module.exports = Timeregistration;
