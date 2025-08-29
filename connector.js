const mongoose = require("mongoose");
async function mongoConnector(url)
{
  mongoose.connect(url);
}
module.exports = mongoConnector;
