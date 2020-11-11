require("dotenv").config();

const express = require("express");
const app = express();

const multer = require("multer");
var upload = multer();

const port = 5001;

app.post("/uploadImg", upload.single("img"), function (req, res) {
  const encodedImg = req.file.buffer.toString("base64");

  let api = new ApiClient({
    token: process.env.IMBB_KEY,
  });

  const ret = api.upload({ image: encodedImg });

  res.json({
    ret: ret,
  });
});

app.listen(port, () => console.log(`port ${port}`));
