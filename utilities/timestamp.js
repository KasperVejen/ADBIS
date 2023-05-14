const moment = require("moment");

function createTimestamp() {
  const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
  return timestamp;
}

module.exports = createTimestamp;
