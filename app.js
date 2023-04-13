const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000; 
const cors = require("cors")

// api routes 
const apirouter = require("./routes/employee")


app.get("/", (req, res) => {
    res.send("Hello");
})

app.use(cors({origin: "*"}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// api routes 
app.use("/api/", apirouter)


app.listen(port, () => {
    console.log(`Running at ${port}`);
})

