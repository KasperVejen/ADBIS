//Database connection
const { pool, testConnection } = require("../../data/configDB");

//Class for Timeregistration
class Timeregistration {
  constructor(user_ID, date, hours, pause, project, work, timestamp) {
    this.user_ID = user_ID;
    this.date = date;
    this.hours = hours;
    this.pause = pause;
    this.project = project;
    this.work = work;
    this.status = 0;
    this.timestamp = timestamp;
  }

  //save to database
  async save() {
    testConnection();
    try {
      const sql =
        "INSERT INTO time_registration (user_ID, date, worked_min, pause, project_ID, work_ID, status, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sql, [
        this.user_ID,
        this.date,
        this.hours,
        this.pause,
        this.project,
        this.work,
        this.status,
        this.timestamp,
      ]);
      connection.release();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  //update status  0 = not approved, 1 = approved 2 = rejected
  async updateStatus(id) {
    testConnection();
    try {
      const sql =
        "UPDATE time_registration SET status = ? WHERE time_registration_ID = ?";
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sql, [this.status, id]);
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
