//Database connection
const { pool, testConnection } = require("../../data/configDB");

//Class for Timeregistration
class Timeregistration {
  constructor(user, date, hours, pause, project) {
    this.user = user;
    this.date = date;
    this.hours = hours;
    this.pause = pause;
    this.project = project;
  }

  //save to database
  async save() {
    try {
      const sql =
        "INSERT INTO timeregistration (user, date, hours, pause, project) VALUES (?, ?, ?, ?, ?)";
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sql, [
        this.user,
        this.date,
        this.hours,
        this.pause,
        this.project,
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
