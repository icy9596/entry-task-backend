const { koaBody } = require("koa-body");

const { PUBLIC_PATH } = require("../utils/paths");

function body() {
  return koaBody({
    multipart: true,
    formidable: {
      uploadDir: PUBLIC_PATH, // oss
      keepExtensions: true,
    },
  });
}

module.exports = body;
