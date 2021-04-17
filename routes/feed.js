const express = require("express")
const feedContoller = require("../controllers/feeds")

const router = express.Router()

//GET REQUEST TO /feed/post
router.get("/post", feedContoller.getPost)
router.post("/createPost", feedContoller.createPost)

module.exports = router
