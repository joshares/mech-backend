const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// use cors middleware
app.use(cors());

//body parser
app.use(express.json({ limit: "10kb" }));

//routes
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/notes", require("./routes/noteRoutes"));

// start server
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
