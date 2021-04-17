const express = require("express")
const feedRouter = require("./routes/feed")
//basic setup of a REST API SERVER
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.use("/feed", feedRouter)

app.listen(9000)
