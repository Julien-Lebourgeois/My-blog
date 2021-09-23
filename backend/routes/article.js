// Imports
const express = require("express");
const router = express.Router();
const articlesCtrl = require("../controllers/article")

// Routes
router.post("/add", articlesCtrl.create);
router.get("/articles", articlesCtrl.getAll);
router.delete("/:id", articlesCtrl.deleteArticle)

module.exports = router;