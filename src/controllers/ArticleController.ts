import { Request, Response } from "express";
import ArticleService from "../services/ArticleService";

export default new (class ArticleController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const article = await ArticleService.create(data);

      return res.status(201).json(article);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const articles = await ArticleService.find();

      return res.status(200).json(articles);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      const article = await ArticleService.findOne(id);

      return res.status(200).json(article);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await ArticleService.update(id, body);
      console.log("Ini id", id)
      console.log("Ini data", body)
      return res.status(200).json({
        message: `Successful update article with id = ${id}`,
        data: { id, ...body },
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      const article = await ArticleService.remove(id);

      return res.status(200).json({ message: "Article has been remove" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
})();
