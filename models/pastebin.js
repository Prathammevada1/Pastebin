const mongoose = require("mongoose");
const pasteSchema = new mongoose.Schema({
  snippet:
  {
    type:String,
    required:true,
  },
  url:
  {
    type:String,
    required:true,
  },
  visitHistory:
  [
    {timestamp:{type:Number},IP:{type:String}}
  ],
},{timestamps:true})
const pasteBin = new mongoose.model("Pastebin",pasteSchema);
module.exports = pasteBin;
