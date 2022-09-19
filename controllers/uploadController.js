const fs = require("fs");
const path = require("path")
const updateService = require("../services/uploadService");


exports.get = (req, res, next) => {
var filename = req.params.filename; 
const uploadFile = path.join(__dirname, `..//data/${filename}`);  
var readStream = fs.createReadStream(uploadFile);
  readStream.on("open", function () {
    readStream.pipe(res);
  });
  readStream.on("error", function (err) {   
    res.send(err);
    next()
  });
 
}

