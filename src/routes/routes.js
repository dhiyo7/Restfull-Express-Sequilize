const {
  articles,
  createArticle,
  updatedArticle,
  deleteArticle,
  detailArticle
} = require("../controllers/Articles");
module.exports = (app) => {
  app.get("/", (_, res) => {
    res.json({ message: "Restful API Sequelize Mysql" });
  });

  app.get("/articles", articles);
  app.post("/articles", createArticle);
  app.put("/articles/:id", updatedArticle);
  app.delete("/articles/:id", deleteArticle);
  app.get("/articles/:id", detailArticle);
};
