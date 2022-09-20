const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const app = express();
const uploadRouter = require("./routes/uploadRouter")


const connectDB = require("./db/connection");


dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 7000;

connectDB();
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));


app.use("/", uploadRouter)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
