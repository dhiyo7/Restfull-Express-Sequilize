const {
  articles,
  createArticle,
  updatedArticle,
  deleteArticle,
  detailArticle,
} = require("../controllers/Articles");
module.exports = (app) => {
  app.get("/", (_, res) => {
    res.json({
      Welcome: "Selamat Datang Di Articles API | Untuk penggunaan API silahkan kunjungi link di bawah",
      Dokumentasi: "https://documenter.getpostman.com/view/6626576/TVmV7Ziy",
      Repository: "https://github.com/dhiyo7/Restfull-Express-Sequilize",
    });
  });

  app.get("/articles", articles);
  app.post("/articles", createArticle);
  app.put("/articles/:id", updatedArticle);
  app.delete("/articles/:id", deleteArticle);
  app.get("/articles/:id", detailArticle);
};
