const { pool, testConnection } = require("../../data/configDB");

class Project {
  constructor(
    project_name,
    description,
    customer_name,
    customer_cvr,
    timestamp
  ) {
    this.project_name = project_name;
    this.description = description;
    this.customer_name = customer_name;
    this.customer_cvr = customer_cvr;
    this.timestamp = timestamp;
  }

  async save() {
    testConnection();
    try {
      const sql =
        "INSERT INTO projects (project_name, project_description, customer_name, customer_CVR, timestamp) VALUES (?, ?, ?, ?, ?)";
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sql, [
        this.project_name,
        this.description,
        this.customer_name,
        this.customer_cvr,
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

module.exports = Project;
