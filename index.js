const express = require("express");
const app = express();
const pastenBinRoutes = require("./routes/pastebin")
const mongoConnector = require("./connector");
PORT = 8002;
mongoConnector("mongodb://localhost:27017/pastebin-clone");

app.use(express.json());
app.use("/pasteBinURL",pastenBinRoutes);

app.listen(PORT,()=>console.log(`Connected to ${PORT}`))