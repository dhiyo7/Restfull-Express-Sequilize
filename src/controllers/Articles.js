const { body, validationResult } = require("express-validator");

const article = require("../../models");
const response = require("../../src/helpers/utils");

exports.articles = async (_, res) => {
  const data = await article.article
    .findAll({ attributes: ["id", "tittle", "description"] })
    .then((result) => result)
    .catch((err) => {
      res.status(500);
      response.failed("failed", err, res);
    });

  res.status(200);
  response.success("Success get article", data, res);
};

exports.createArticle = (req, res) => {
  const { tittle, description } = req.body;
  article.article
    .create({ tittle, description })
    .then((data) => {
      res.status(201);
      response.success("Successfully created article", data, res);
    })
    .catch((err) => {
      const { errors } = err;
      const errMessage = {};
      errors.map((item) => (errMessage[item.path] = item.message));
      res.status(500);
      response.failed("failed", errMessage, res);
    });
};

exports.updatedArticle = (req, res) => {
  const { id } = req.params;
  const { tittle, description } = req.body;

  article.article
    .update(
      { tittle, description },
      {
        where: { id },
      }
    )
    .then(async (data) => {
      if (data.join("") > 0) {
        const articleData = await article.article
          .findOne({ where: { id }, raw: false })
          .then((result) => result);
        res.status(200);
        response.success("Successfully update article", articleData, res);
        return;
      }
      response.failed("failed", { id: "id not found" }, res.status(500));
    });
  // .catch((err) => {
  //   console.log(err);
  //   const { errors } = err;
  //   const errMessage = {};
  //   if (errors) {
  //     errors.map((item) => (errMessage[item.path] = item.message));
  //   }
  //   res.status(503);
  //   response.failed("failed", errMessage, res);
  // });
};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;

  article.article.destroy({ where: { id } }).then((data) => {
    if (data > 0) {
      res.status(202);
      response.success("data success deleted", {}, res);
      return;
    } else {
      res.status(404);
      response.failed("data failed", { id: "id not found" }, res);
    }
  });
};

exports.detailArticle = async (req, res) => {
  const { id } = req.params;

  const getById = await article.article
    .findOne({ where: { id } })
    .then((result) => result)
    .catch((err) => {
      err;
    });
    if(getById) {
      response.success(" Data Success", getById, res);
    } else {
      res.status(404)
      response.failed(" Data Not Found", undefined, res);
    }
};
