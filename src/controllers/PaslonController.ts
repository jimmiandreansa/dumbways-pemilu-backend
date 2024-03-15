import { Request, Response } from "express";
import PaslonService from "../services/PaslonService";

export default new (class PaslonController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const paslon = await PaslonService.create(data);

      return res.status(201).json(paslon);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const paslon = await PaslonService.find();
      return res.status(200).json({
        message: "Success find all paslon data",
        data: paslon,
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const paslon = await PaslonService.findOne(id);
      return res.status(200).json({
        message: `Paslon found with id = ${id}`,
        data: paslon,
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await PaslonService.update(id, body);
      return res.status(200).json({
        message: `Successful update paslon data with id = ${id}`,
        data: { id, ...body },
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await PaslonService.remove(id);
      return res
        .status(200)
        .json({ message: `Successful delete data with id ${id}` });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
})();
