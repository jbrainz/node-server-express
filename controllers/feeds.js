exports.getPost = (req, res, next) => {
  res.status(200).json({
    post: [{ title: "First Post", content: "this is the first post" }],
  })
}

exports.createPost = (req, res, next) => {
  const title = req.body.title
  const content = req.body.content
  res.status(201).json({
    message: "Post created!",
    post: { id: new Date().toString(), title, content },
  })
}
