const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const fileBuffer = require("../middlewares/upload");
const dbService = require("../services/uploadService");

router.post("/upload/:filename", fileBuffer.fileToBuffer, async (req, res) => {
  try {
    var filename = req.params.filename;
    await dbService.create(filename, req.file);
    res.json("upload");
  } catch (error) {
    res.send(error);
  }
});

router.put("/data/:filename", fileBuffer.fileToBuffer, async (req, res) => {
  try {
    var filename = req.params.filename;
    await dbService.update(filename, req.file);
    res.json("changed");
  } catch (error) {
    res.send(error);
  }
});

router.get("/data/:filename", uploadController.get, async(req, res) =>{
  try{
  res.json("got file")
  }catch(error){
    res.send(error)
  }
});


module.exports = router;
