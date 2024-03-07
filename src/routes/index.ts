import * as express from "express";
import * as bodyParser from "body-parser";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";

const routes = express.Router();
const jsonParser = bodyParser.json();

// Route for user
routes.get("/users", UserController.find);
routes.get("/users/:id", UserController.findOne);
routes.post("/user", jsonParser, UserController.create);
routes.delete("/users/:id", jsonParser, UserController.remove);

// Route for article
routes.post("/article", jsonParser, ArticleController.create)
routes.get("/articles", ArticleController.find)
routes.get("/articles/:id", ArticleController.findOne)
routes.delete("/articles/:id", ArticleController.remove)

export default routes;
