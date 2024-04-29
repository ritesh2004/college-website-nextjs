const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./route/admin.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config(".env");

const app = express();

app.use(cors({
    origin : process.env.FRONTEND_URI,
    methods : ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json());

app.use(cookieParser());

app.use("/api/v1",adminRouter);

app.get("/", (req, res) => {
    res.send("Working");
});



module.exports = app;
