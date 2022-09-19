const express = require("express");
const router = express.Router();
const fs = require("fs")
const path = require("path")
const uploadController = require("../controllers/uploadController")
const fileBuffer = require("../middlewares/upload");
const dbService = require("../services/uploadService")


router.post("/upload/:filename", fileBuffer.fileToBuffer, async (req, res) => {
  var filename = req.params.filename;
  const uploadFile = path.join(__dirname, `../data/${filename}`);
  fs.writeFile(uploadFile, req.file, "binary", (err) => {
    res.send("uploaded");
  });
  await dbService.create(filename, req.headers["content-type"], req.headers["content-length"]);
});

router.put("/data/:filename", fileBuffer.fileToBuffer, async (req, res) => {
  var filename = req.params.filename;
  const uploadFile = path.join(__dirname, `../data/${filename}`);
  fs.writeFile(uploadFile, req.file, "binary", (err) => {
    if (!err) {
      res.send("changed");
    }
  });
   await dbService.update(
     filename,
     req.headers["content-type"],
     req.headers["content-length"]
   );
});

router.get("/data/:filename", uploadController.get);


module.exports = router;


