const express = require("express")
const {urlGeneratorHandler,urlRedirectHandler} = require("../controllers/pastebin")
routes = express.Router();
routes.post('/',urlGeneratorHandler);
routes.get('/:url',urlRedirectHandler);
module.exports = routes;