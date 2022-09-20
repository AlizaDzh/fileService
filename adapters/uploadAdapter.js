const fs = require("fs");
const path = require("path");


class streamAdapter {
  async writeStream(filename, buff) {
    const uploadFile = path.join(process.env.UPLOAD_FOLDER, `/${filename}`)
    try {
      console.log(uploadFile)
      const writeStr = fs.createWriteStream(uploadFile);
      writeStr.write(buff);
      writeStr.on("error", (err) => console.log(err));
      writeStr.on("end", () => console.log("end"));
    } catch (error) {
      return error;
    }
  }
  async readStream(filename, buff) {
    const uploadFile = path.join(process.env.UPLOAD_FOLDER,`/${filename}`);
    try {
      const readStr = fs.createReadStream(uploadFile);
      readStr.pipe(buff);
      readStr.on("error", (err) => console.log(err));
      readStr.on("end", () => console.log("end"));
    } catch (error) {
      return error;
    }
  }
}

module.exports = new streamAdapter()

