const fs = require("fs");
const path = require("path");


class streamAdapter {
  async writeStream(filename, buff) {
    const uploadFile = path.join(__dirname, `../data/${filename}`);
    try {
     const writeStr = fs.createWriteStream(uploadFile)
     writeStr.write(buff)
     writeStr.on("error", err => console.log(err))
     writeStr.on("end", () => console.log("end"));
     
    } catch (error) {
      return error;
    }
 
  }
}

module.exports = new streamAdapter()

