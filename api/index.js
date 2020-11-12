require("dotenv").config();

const express = require("express");
const app = express();

const multer = require("multer");
var upload = multer();

const Imgbb = require("imgbbjs");

const port = 5001;

app.post("/uploadImg", upload.single("img"), function (req, res) {
  const encodedImg = req.file.buffer.toString("base64");

  console.log(uploadToImbBB(encodedImg));
  const url = uploadToImbBB(encodedImg);

  res.json({ url: url });
});

async function uploadToImbBB(encodedImg) {
  const imgbb = await new Imgbb({ key: process.env.IMGBB_KEY });
  var ret = await imgbb.upload(encodedImg, "testing").then((data) => (ret = data)));

  return ret;
}

app.listen(port, () => console.log(`port ${port}`));
