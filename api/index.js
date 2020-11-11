require("dotenv").config();

const express = require("express");
const multer = require("multer");
const port = 5001;
const app = express();

var upload = multer();

app.post("/uploadImg", upload.single("img"), function (req, res) {
  const encodedImg = req.file.buffer.toString("base64");
  const options = {
    method: "POST",
    uri: "https://api.imgbb.com/1/upload",
    form: {
      key: process.env.IMBB_KEY,
      image: encodedImg,
    },
    json: true,
  };

  res.json({ hello: options });
});

app.listen(port, () => console.log(`port ${port}`));
