var mongoose = require("mongoose");

var metaData = new mongoose.Schema({
  name: {
    type: String,
  },
  mimeType: {
    type: String,
  },
  size: {
    type: String,
  },
});


module.exports = new mongoose.model("metaData", metaData);
