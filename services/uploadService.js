var mongoose = require("mongoose");
const fileModel = require("../models/files");
const uploadAdapter = require("../adapters/uploadAdapter");

class ServiceBuffer {
  async create(filename,{buff, mimeType, size}) {
    try {
      await fileModel.create({ name: filename, mimeType, size });
      return await uploadAdapter.writeStream(filename, buff);
    } catch (error) {
      return error;
    }
  }
  async update(filename, {buff, mimeType, size }) {
    try {
      await fileModel.updateMany({ name: filename, mimeType, size });
      return await uploadAdapter.writeStream(filename, buff);
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ServiceBuffer();
