import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UserValidator } from "../utils/validator/User";

export default new (class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const {error, value} = UserValidator.validate(data);
      if(error) return res.status(400).json({message: error.details[0].message})

      const user = await UserService.create(value);

      return res.status(201).json({ message: "Success create a user" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.find();

      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      const user = await UserService.findOne(id);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      const user = await UserService.remove(id);

      return res.status(200).json({ message: "User has been remove" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
})();
