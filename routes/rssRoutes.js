const express = require("express");

const rssController = require("../controllers/rssController");

const router = express.Router();

router.route("/").get(rssController.find).post(rssController.createOne);

router.route("/:slug").get(rssController.find).delete(rssController.deleteOne);

module.exports = router;
