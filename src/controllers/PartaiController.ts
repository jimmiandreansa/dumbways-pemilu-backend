import { Request, Response } from "express";
import PartaiService from "../services/PartaiService";

export default new (class PartaiController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const partai = await PartaiService.create(data);
      return res.status(201).json({
        message: "Succesfull add partai",
        data: partai,
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const partai = await PartaiService.find();
      return res
        .status(200)
        .json({ message: "Successful find all data partai", data: partai });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const partai = await PartaiService.findOne(id);
      return res.status(200).json({
        message: `Partai found with id = ${id}`,
        data: partai,
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await PartaiService.update(id, body);
      return res.status(200).json({
        message: `Successfull update partai with id = ${id}`,
        data: { id, ...body },
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await PartaiService.remove(id);
      return res
        .status(200)
        .json({ message: `Successful delete partai with id = ${id}` });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
})();
