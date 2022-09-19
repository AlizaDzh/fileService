const express = require("express");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const app = express();
// const fileModel = require("./models/files");
const uploadRouter = require("./routes/uploadRouter")
// const dataRouter = require("./routes/dataRouter");

const connectDB = require("./db/connection");
// const { nextTick } = require("process");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 7000;

connectDB();
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));


app.use("/", uploadRouter)
// app.use("/", dataRouter);


// const fileToBuffer = (req, res, next) => {
//   var filename = req.params
//   let buff = Buffer.from("");
//   req.on("data", (chunk) => {
//     buff = Buffer.concat([buff, chunk]);
//   });
//   req.on("end", () => {
//     req.file = buff;
//     next()
//   });
// };


// app.post("/upload/:filename", fileToBuffer, (req, res) => {
  
//    var filename = req.params.filename;
//    fs.writeFile(__dirname + "/data/" + filename, req.file, "binary", (err) => {
//      if (!err) {
//        res.send("uploaded");
//      }
//    });
 
  // fileModel.create({
  //   name:filename,
  //   mimeType: req.headers["content-type"],
  //   size: req.headers["content-length"]   
  // })
// });

// app.put("/data/:filename", fileToBuffer, (req, res) => {
 
//  var filename = req.params.filename
//  fs.writeFile(__dirname + "/data/" + filename, req.file, "binary", (err) => {
//    if (!err) {
//      res.send("changed");
//    }
//  });
 

// });

// app.get("/data/:filename", (req, res) => {
  // var filename = req.params.filename;
  // var readStream = fs.createReadStream(__dirname + "/data/" + filename);
  // readStream.on("open", function () {
  //   readStream.pipe(res);
  // });
  // readStream.on("error", function (err) {
  //   res.send(err);
  // });
  // fileModel.update({
  //   name: filename,
  //   mimeType: req.headers["content-type"],
  //   size: req.headers["content-length"],
  // });
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
