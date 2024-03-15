import * as express from "express";
import * as bodyParser from "body-parser";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";
import PaslonController from "../controllers/PaslonController";
import PartaiController from "../controllers/PartaiController";
import VoteController from "../controllers/VoteController";

const routes = express.Router();
const jsonParser = bodyParser.json();

// Routes for user
routes.post("/register", jsonParser, UserController.create);
routes.get("/users", UserController.find);
routes.get("/user/:id", UserController.findOne);
routes.patch("/user/:id", jsonParser, UserController.update);
routes.delete("/user/:id", UserController.remove);

// Routes for article
routes.post("/article", jsonParser, ArticleController.create);
routes.get("/articles", ArticleController.find);
routes.get("/article/:id", ArticleController.findOne);
routes.patch("/article/:id", jsonParser, ArticleController.update);
routes.delete("/article/:id", ArticleController.remove);

// Routes for paslon
routes.post("/paslon", jsonParser, PaslonController.create);
routes.get("/paslon", PaslonController.find);
routes.get("/paslon/:id", PaslonController.findOne);
routes.patch("/paslon/:id", jsonParser, PaslonController.update);
routes.delete("/paslon/:id", PaslonController.remove);

// Routes for partai
routes.post("/partai", jsonParser, PartaiController.create);
routes.get("/partai", PartaiController.find);
routes.get("/partai/:id", PartaiController.findOne);
routes.patch("/partai/:id", jsonParser, PartaiController.update);
routes.delete("/partai/:id", PartaiController.remove);

// Routes for vote
routes.post("/vote", jsonParser, VoteController.create);
routes.get("/vote", VoteController.find)
routes.get("/vote/:id", VoteController.findOne)
routes.patch("/vote/:Id", jsonParser, VoteController.update)
routes.delete("/vote/:id", VoteController.remove)

export default routes;
