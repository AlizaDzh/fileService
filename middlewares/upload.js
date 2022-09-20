exports.fileToBuffer = (req, res, next) => {
  let buff = Buffer.from("");
  req.on("data", (chunk) => {
    buff = Buffer.concat([buff, chunk]);
  });
  req.on("end", () => {
    req.file = {
       buff,
       size: req.headers["content-length"],
       mimeType: req.headers["content-type"],
    }
    next();
  });
}