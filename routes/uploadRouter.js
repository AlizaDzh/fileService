const express = require("express");
const router = express.Router();
const fileBuffer = require("../middlewares/upload");
const dbService = require("../services/uploadService");
const adapter = require("../adapters/uploadAdapter");

router.post("/upload/:filename", fileBuffer.fileToBuffer, async (req, res) => {
  try {
    const filename = req.params.filename;
    await dbService.create(filename, req.file);
    res.json("upload");
  } catch (error) {
    res.send(error);
  }
});

router.put("/data/:filename", fileBuffer.fileToBuffer, async (req, res) => {
  try {
    const filename = req.params.filename;
    await dbService.update(filename, req.file);
    res.json("changed");
  } catch (error) {
    res.send(error);
  }
});

router.get("/data/:filename", async (req, res) => {
  try {
    const filename = req.params.filename;
    await adapter.readStream(filename, res)
  } catch (error) {
    res.send(error);
  }
});



module.exports = router;
