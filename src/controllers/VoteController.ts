import { Request, Response } from "express";
import VoteService from "../services/VoteService";
import { VoteValidator } from "../utils/validator/Vote";

export default new (class VoteController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = VoteValidator.validate(data);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      await VoteService.create(value);

      return res
        .status(200)
        .json({ message: "Create Data Vote Success", data });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: err });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const vote = await VoteService.find();

      return res.status(200).json(vote);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: err });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const vote = await VoteService.findOne(id);
      return res.status(200).json(vote);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: err });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await VoteService.update(body, id);
      return res.status(200).json({
        message: "Update Vote Success",
        data: { id: id, ...body },
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: err });
    }
  }

  async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await VoteService.remove(id);
      return res.status(200).json({ message: "Delete Vote Success" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: err });
    }
  }
})();