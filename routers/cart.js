const router = require("express").Router();
const Posts = require("../models/PostProduct");

router.get("/carts", async (req, res) => {
  try {
    const getAllposts = await Posts.find();

    res.json(getAllposts);
  } catch (error) {
    res.send(500).send(error);
  }
});
router.get("/carts/:id", async (req, res) => {
  try {
    const getAllposts = await Posts.findById(req.params.id);
    res.json(getAllposts);
  } catch (error) {
    res.send(500).send(error);
  }
});

router.post("/carts", (req, res) => {
  const post = new Posts({
    title: req.body.title,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    sizes: req.body.sizes,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
