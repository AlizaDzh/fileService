const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const fileBuffer = require("../middlewares/upload");
const fs = require("fs");
const path = require("path");
const updateService = require("../services/uploadService");

// router.put("/data/:filename", fileBuffer.fileToBuffer, (req, res) => {
//   var filename = req.params.filename;
//   const uploadFile = path.join(__dirname, `../data/${filename}`);
//   fs.writeFile(uploadFile, req.file, "binary", (err) => {
//     if (!err) {
//       res.send("changed");
//     }
//   });
// });

// router.get("/data/:filename", uploadController.get)
module.exports = router;