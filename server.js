const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./frontend/dist")));
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
